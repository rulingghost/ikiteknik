import React, { useState } from 'react';
import { Plus, Trash2, X, Image as ImageIcon, Upload } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { supabase } from '../../utils/supabaseClient';
import { deleteFile } from '../../utils/supabaseStorage';
import toast from 'react-hot-toast';
import ImageUpload from '../../components/admin/ImageUpload';

const GalleryManager = () => {
    const { gallery, loading, refreshData } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '3D Tarama',
    });
    const [uploadedImages, setUploadedImages] = useState([]);
    const [saving, setSaving] = useState(false);

    const categories = [
        '3D Tarama',
        '3D Modelleme',
        '3D Baskı',
        '3D3P Cihazlar',
        'Tersine Mühendislik',
        'ürün 3d modelleme'
    ];

    const handleImagesUploaded = (urls) => {
        setUploadedImages(urls);
        toast.success(`${urls.length} görsel yüklendi! Kaydetmek için formu onaylayın.`);
    };

    const handleSave = async () => {
        if (uploadedImages.length === 0) {
            toast.error('Lütfen en az bir görsel yükleyin!');
            return;
        }

        if (!formData.title || !formData.category) {
            toast.error('Başlık ve kategori zorunludur!');
            return;
        }

        setSaving(true);
        try {
            // Create entries for all uploaded images
            const entries = uploadedImages.map((url, index) => ({
                title: uploadedImages.length > 1 ? `${formData.title} ${index + 1}` : formData.title,
                category: formData.category,
                image: url
            }));

            const { error } = await supabase
                .from('gallery')
                .insert(entries);

            if (error) throw error;

            toast.success('Görseller/Görsel başarıyla kaydedildi!');
            resetForm();
            refreshData();
        } catch (error) {
            toast.error('Hata: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (item) => {
        if (!confirm('Bu görseli silmek istediğinize emin misiniz?')) return;

        try {
            // Delete from storage
            if (item.image.includes('supabase')) {
                await deleteFile(item.image);
            }

            // Delete from database
            const { error } = await supabase
                .from('gallery')
                .delete()
                .eq('id', item.id);

            if (error) throw error;
            toast.success('Görsel silindi!');
            refreshData();
        } catch (error) {
            toast.error('Hata: ' + error.message);
        }
    };

    const resetForm = () => {
        setFormData({ title: '', category: '3D Tarama' });
        setUploadedImages([]);

        setIsAdding(false);
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
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Galeri Yönetimi</h1>
                    <p className="text-slate-500 mt-1">3D3P Cihaz ve Proje Görselleri</p>
                </div>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all shadow-lg"
                >
                    {isAdding ? <X size={20} /> : <Plus size={20} />}
                    {isAdding ? 'İptal' : 'Yeni Görsel'}
                </button>
            </div>

            {/* Upload Form */}
            {isAdding && (
                <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-slate-200">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Upload className="text-rose-600" />
                        Yeni Görsel Yükle
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* File Upload Area */}
                        {/* File Upload Area */}
                        <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">Görsel Dosyası</label>
                             <ImageUpload 
                                onUploadComplete={handleImagesUploaded}
                                folder="gallery"
                                multiple={true}
                             />
                             {uploadedImages.length > 0 && (
                                <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                                    <p className="text-sm font-bold text-green-700 flex items-center gap-2">
                                        <ImageIcon size={16} />
                                        {uploadedImages.length} Görsel Yüklendi
                                    </p>
                                    <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                                        {uploadedImages.map((url, idx) => (
                                            <img key={idx} src={url} alt="" className="w-12 h-12 rounded object-cover border border-white shadow-sm" />
                                        ))}
                                    </div>
                                </div>
                             )}
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Başlık</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Görsel başlığı"
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Kategori</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-rose-500"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                onClick={handleSave}
                                disabled={saving || uploadedImages.length === 0}
                                className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold hover:bg-rose-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                            >
                                {saving ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Kaydediliyor...
                                    </>
                                ) : (
                                    <>
                                        <Plus size={20} />
                                        Galeriye Kaydet
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map(item => (
                    <div key={item.id} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200">
                        <div className="aspect-square overflow-hidden bg-slate-100">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-slate-900 text-sm mb-1 truncate">{item.title}</h3>
                            <p className="text-xs text-slate-500">📁 {item.category}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(item)}
                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            {gallery.length === 0 && (
                <div className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <ImageIcon className="mx-auto mb-4 text-slate-300" size={64} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Henüz Görsel Yok</h3>
                    <p className="text-slate-500 mb-6">İlk görseli yüklemek için yukarıdaki butonu kullanın.</p>
                </div>
            )}
        </div>
    );
};

export default GalleryManager;
