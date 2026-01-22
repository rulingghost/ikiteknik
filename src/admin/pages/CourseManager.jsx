import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Star } from 'lucide-react';
import ImageUpload from '../../components/admin/ImageUpload';
import { useData } from '../../context/DataContext';
import { supabase } from '../../utils/supabaseClient';
import toast from 'react-hot-toast';

const CourseManager = () => {
    const { courses, loading, refreshData } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Yazılım',
        description: '',
        duration: '80 Saat',
        image: '',
        is_popular: false
    });

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const resetForm = () => {
        setFormData({
            title: '',
            category: 'Yazılım',
            description: '',
            duration: '80 Saat',
            image: '',
            is_popular: false
        });
        setIsAdding(false);
        setEditingId(null);
    };

    const handleSave = async () => {
        try {
            if (editingId) {
                const { error } = await supabase
                    .from('courses')
                    .update(formData)
                    .eq('id', editingId);
                
                if (error) throw error;
                toast.success('Kurs güncellendi!');
            } else {
                const { error } = await supabase
                    .from('courses')
                    .insert([formData]);
                
                if (error) throw error;
                toast.success('Kurs eklendi!');
            }
            
            resetForm();
            refreshData();
        } catch (error) {
            toast.error('Hata: ' + error.message);
        }
    };

    const handleEdit = (course) => {
        setFormData(course);
        setEditingId(course.id);
        setIsAdding(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Bu kursu silmek istediğinize emin misiniz?')) return;
        
        try {
            const { error } = await supabase
                .from('courses')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            toast.success('Kurs silindi!');
            refreshData();
        } catch (error) {
            toast.error('Hata: ' + error.message);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Kurs Yönetimi</h1>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all"
                >
                    {isAdding ? <X size={20} /> : <Plus size={20} />}
                    {isAdding ? 'İptal' : 'Yeni Kurs'}
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-slate-200">
                    <h2 className="text-xl font-bold mb-6">{editingId ? 'Kursu Düzenle' : 'Yeni Kurs Ekle'}</h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Kurs Adı"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        >
                            <option>Yazılım</option>
                            <option>Tasarım</option>
                            <option>Mühendislik</option>
                            <option>Grafik</option>
                            <option>Web Tasarım</option>
                            <option>Animasyon</option>
                        </select>
                        <input
                            type="text"
                            name="duration"
                            placeholder="Süre (örn: 80 Saat)"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Kurs Görseli</label>
                            <ImageUpload
                                initialImage={formData.image}
                                folder="courses"
                                onUploadComplete={(url) => setFormData(prev => ({ ...prev, image: url }))}
                            />
                        </div>
                    </div>
                    <textarea
                        name="description"
                        placeholder="Kurs Açıklaması"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500 mb-4"
                    />
                    <label className="flex items-center gap-2 mb-4 cursor-pointer">
                        <input
                            type="checkbox"
                            name="is_popular"
                            checked={formData.is_popular}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                        <span className="font-medium">Popüler olarak işaretle</span>
                    </label>
                    <button
                        onClick={handleSave}
                        className="w-full bg-rose-600 text-white py-3 rounded-xl font-bold hover:bg-rose-700 transition-all flex items-center justify-center gap-2"
                    >
                        <Save size={20} />
                        {editingId ? 'Güncelle' : 'Kaydet'}
                    </button>
                </div>
            )}

            <div className="grid gap-4">
                {courses.map(course => (
                    <div key={course.id} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex justify-between items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-slate-900">{course.title}</h3>
                                {course.is_popular && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
                            </div>
                            <p className="text-sm text-slate-500 mb-2">{course.description || course.desc}</p>
                            <div className="flex gap-4 text-xs text-slate-400">
                                <span>📁 {course.category}</span>
                                <span>⏱️ {course.duration}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(course)}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(course.id)}
                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseManager;
