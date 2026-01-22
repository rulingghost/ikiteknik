import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { supabase } from '../../utils/supabaseClient';

import { toast } from 'react-hot-toast';
import ImageUpload from '../../components/admin/ImageUpload';
import { 
    Plus, 
    Trash2, 
    Edit2, 
    ShoppingBag, 
    Search,
    Package,
    Tag,
    DollarSign,
    Upload
} from 'lucide-react';

const ProductManager = () => {
    const { products, refreshData } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '3D Yazıcı',
        price: '',
        image: '',
        tag: 'Yeni',
        stock: true
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const actionToast = toast.loading('Kaydediliyor...');

        try {
            const { error } = await supabase.from('products').insert([formData]);
            if (error) throw error;

            toast.success('Ürün başarıyla eklendi', { id: actionToast });
            setIsAdding(false);
            setFormData({ title: '', category: '3D Yazıcı', price: '', image: '', tag: 'Yeni', stock: true });
            refreshData();
        } catch (err) {
            toast.error('Hata: ' + err.message, { id: actionToast });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;

        const deleteToast = toast.loading('Siliniyor...');
        try {
            const { error } = await supabase.from('products').delete().eq('id', id);
            if (error) throw error;
            toast.success('Ürün silindi', { id: deleteToast });
            refreshData();
        } catch (err) {
            toast.error('Hata: ' + err.message, { id: deleteToast });
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight">Mağaza Yönetimi</h2>
                    <p className="text-slate-500 text-sm">Ürünleri, fiyatları ve stok durumunu yönetin.</p>
                </div>
                <button 
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95 text-sm"
                >
                    {isAdding ? <Plus className="rotate-45 transition-transform" /> : <Plus />}
                    {isAdding ? 'Kapat' : 'Yeni Ürün Ekle'}
                </button>
            </div>

            {isAdding && (
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 animate-slide-up">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Ürün Adı</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-500 transition-all text-sm font-medium"
                                placeholder="Örn: Ender 3 V3 KE"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Kategori</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-500 transition-all text-sm font-medium"
                            >
                                <option>3D Yazıcı</option>
                                <option>Sarf Malzeme</option>
                                <option>3D Tarayıcı</option>
                                <option>Yedek Parça</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Fiyat</label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input
                                    type="text"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-rose-500 transition-all text-sm font-medium"
                                    placeholder="Örn: 12.500 ₺"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Etiket</label>
                            <input
                                type="text"
                                value={formData.tag}
                                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-500 transition-all text-sm font-medium"
                                placeholder="Sıcak Fırsat, Yeni vb."
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Görsel Yükle</label>
                            <ImageUpload 
                                initialImage={formData.image}
                                folder="products"
                                onUploadComplete={(url) => setFormData({ ...formData, image: url })}
                            />
                        </div>
                        <div className="lg:col-span-3 flex justify-end">
                            <button
                                type="submit"
                                disabled={loading || !formData.image}
                                className="bg-rose-600 text-white font-bold px-10 py-3.5 rounded-xl hover:bg-rose-700 transition-all shadow-lg active:scale-95 disabled:opacity-50 text-sm"
                            >
                                {loading ? 'Kaydediliyor...' : 'Kaydet ve Yayınla'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Ürün</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Kategori</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Fiyat</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl border border-slate-100 overflow-hidden bg-slate-50">
                                            <img src={product.image} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">{product.title}</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{product.tag}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">{product.category}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-slate-900 text-sm">{product.price}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"><Edit2 size={16} /></button>
                                        <button onClick={() => handleDelete(product.id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManager;
