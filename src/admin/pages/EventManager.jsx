import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Calendar } from 'lucide-react';
import ImageUpload from '../../components/admin/ImageUpload';
import { useData } from '../../context/DataContext';
import { supabase } from '../../utils/supabaseClient';
import toast from 'react-hot-toast';

const EventManager = () => {
    const { events, loading, refreshData } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        event_date: '',
        time: '',
        days: '',
        instructor: '',
        instructor_img: '',
        image: '',
        quota: 10,
        status: 'active'
    });

    const handleInputChange = (e) => {
        const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const resetForm = () => {
        setFormData({
            title: '',
            event_date: '',
            time: '',
            days: '',
            instructor: '',
            instructor_img: '',
            image: '',
            quota: 10,
            status: 'active'
        });
        setIsAdding(false);
        setEditingId(null);
    };

    const handleSave = async () => {
        try {
            if (editingId) {
                const { error } = await supabase
                    .from('events')
                    .update(formData)
                    .eq('id', editingId);
                
                if (error) throw error;
                toast.success('Etkinlik güncellendi!');
            } else {
                const { error } = await supabase
                    .from('events')
                    .insert([formData]);
                
                if (error) throw error;
                toast.success('Etkinlik eklendi!');
            }
            
            resetForm();
            refreshData();
        } catch (error) {
            toast.error('Hata: ' + error.message);
        }
    };

   const handleEdit = (event) => {
        setFormData(event);
        setEditingId(event.id);
        setIsAdding(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Bu etkinliği silmek istediğinize emin misiniz?')) return;
        
        try {
            const { error } = await supabase
                .from('events')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            toast.success('Etkinlik silindi!');
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
                <h1 className="text-3xl font-bold text-slate-900">Takvim Yönetimi</h1>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all"
                >
                    {isAdding ? <X size={20} /> : <Plus size={20} />}
                    {isAdding ? 'İptal' : 'Yeni Etkinlik'}
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-slate-200">
                    <h2 className="text-xl font-bold mb-6">{editingId ? 'Etkinliği Düzenle' : 'Yeni Etkinlik Ekle'}</h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Etkinlik Adı"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <input
                            type="date"
                            name="event_date"
                            value={formData.event_date}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <input
                            type="text"
                            name="time"
                            placeholder="Saat (örn: 18:30 - 21:30)"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <input
                            type="text"
                            name="days"
                            placeholder="Günler (örn: Pazartesi - Çarşamba)"
                            value={formData.days}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <input
                            type="text"
                            name="instructor"
                            placeholder="Eğitmen Adı"
                            value={formData.instructor}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <input
                            type="number"
                            name="quota"
                            placeholder="Kota"
                            value={formData.quota}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Etkinlik Görseli</label>
                            <ImageUpload
                                initialImage={formData.image}
                                folder="events"
                                onUploadComplete={(url) => setFormData(prev => ({ ...prev, image: url }))}
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Eğitmen Fotoğrafı</label>
                            <ImageUpload
                                initialImage={formData.instructor_img}
                                folder="instructors"
                                onUploadComplete={(url) => setFormData(prev => ({ ...prev, instructor_img: url }))}
                            />
                        </div>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        >
                            <option value="active">Aktif</option>
                            <option value="upcoming">Yaklaşan</option>
                            <option value="full">Dolu</option>
                        </select>
                    </div>
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
                {events.map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex justify-between items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar size={18} className="text-rose-600" />
                                <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                                {event.status === 'full' && <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded">DOLU</span>}
                            </div>
                            <div className="flex gap-4 text-xs text-slate-400">
                                <span>📅 {new Date(event.event_date).toLocaleDateString('tr-TR')}</span>
                                <span>⏰ {event.time}</span>
                                <span>📆 {event.days}</span>
                                <span>👤 {event.instructor}</span>
                                <span>🎟️ {event.quota} kişi</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(event)}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(event.id)}
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

export default EventManager;
