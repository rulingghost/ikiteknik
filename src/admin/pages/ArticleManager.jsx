import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import ImageUpload from '../../components/admin/ImageUpload';
import { useData } from '../../context/DataContext';
import { supabase } from '../../utils/supabaseClient';
import toast from 'react-hot-toast';

const ArticleManager = () => {
    const { articles, loading, refreshData } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Teknoloji',
        excerpt: '',
        content: '',
        author: '',
        image: '',
        read_time: '5 dk'
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormData({
            title: '',
            category: 'Teknoloji',
            excerpt: '',
            content: '',
            author: '',
            image: '',
            read_time: '5 dk'
        });
        setIsAdding(false);
        setEditingId(null);
    };

    const handleSave = async () => {
        try {
            if (editingId) {
                const { error } = await supabase
                    .from('articles')
                    .update(formData)
                    .eq('id', editingId);
                
                if (error) throw error;
                toast.success('Makale güncellendi!');
            } else {
                const { error } = await supabase
                    .from('articles')
                    .insert([formData]);
                
                if (error) throw error;
                toast.success('Makale eklendi!');
            }
            
            resetForm();
            refreshData();
        } catch (error) {
            toast.error('Hata: ' + error.message);
        }
    };

    const handleEdit = (article) => {
        setFormData(article);
        setEditingId(article.id);
        setIsAdding(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Bu makaleyi silmek istediğinize emin misiniz?')) return;
        
        try {
            const { error } = await supabase
                .from('articles')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            toast.success('Makale silindi!');
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
                <h1 className="text-3xl font-bold text-slate-900">Makale Yönetimi</h1>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all"
                >
                    {isAdding ? <X size={20} /> : <Plus size={20} />}
                    {isAdding ? 'İptal' : 'Yeni Makale'}
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-slate-200">
                    <h2 className="text-xl font-bold mb-6">{editingId ? 'Makaleyi Düzenle' : 'Yeni Makale Ekle'}</h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Başlık"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder="Yazar"
                            value={formData.author}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        >
                            <option>Teknoloji</option>
                            <option>3D Tasarım</option>
                            <option>Mühendislik</option>
                            <option>Grafik</option>
                            <option>Programlama</option>
                            <option>Mimari</option>
                        </select>
                        <input
                            type="text"
                            name="read_time"
                            placeholder="Okuma Süresi (örn: 5 dk)"
                            value={formData.read_time}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Kapak Görseli</label>
                        <ImageUpload
                            initialImage={formData.image}
                            folder="articles"
                            onUploadComplete={(url) => setFormData(prev => ({ ...prev, image: url }))}
                        />
                    </div>
                    <textarea
                        name="excerpt"
                        placeholder="Kısa Özet"
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500 mb-4"
                    />
                    <textarea
                        name="content"
                        placeholder="Makale İçeriği"
                        value={formData.content}
                        onChange={handleInputChange}
                        rows="6"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500 mb-4"
                    />
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
                {articles.map(article => (
                    <div key={article.id} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex justify-between items-start">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{article.title}</h3>
                            <p className="text-sm text-slate-500 mb-2">{article.excerpt}</p>
                            <div className="flex gap-4 text-xs text-slate-400">
                                <span>📁 {article.category}</span>
                                <span>👤 {article.author}</span>
                                <span>⏱️ {article.read_time}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(article)}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(article.id)}
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

export default ArticleManager;
