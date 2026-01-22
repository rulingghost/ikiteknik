import React from 'react';
import { useData } from '../../context/DataContext';
import { supabase } from '../../utils/supabaseClient';
import { toast } from 'react-hot-toast';
import { Mail, Trash2, Calendar, Phone, User, MessageSquare } from 'lucide-react';

const Submissions = () => {
    const { submissions, refreshData, loading } = useData();

    const handleDelete = async (id) => {
        if (!window.confirm('Bu mesajı silmek istediğinize emin misiniz?')) return;
        
        try {
            const { error } = await supabase.from('submissions').delete().eq('id', id);
            if (error) throw error;
            toast.success('Mesaj silindi');
            refreshData();
        } catch (err) {
            toast.error('Hata: ' + err.message);
        }
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">İletişim Mesajları</h2>
                <p className="text-slate-500 text-sm">İletişim formu üzerinden gelen talepler.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {submissions.length === 0 ? (
                    <div className="bg-white p-12 rounded-[2rem] text-center border border-slate-200">
                        <MessageSquare className="mx-auto text-slate-200 mb-4" size={48} />
                        <p className="text-slate-400 font-medium">Henüz mesaj bulunmuyor.</p>
                    </div>
                ) : (
                    submissions.map((msg) => (
                        <div key={msg.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 hover:border-rose-200 transition-all group">
                            <div className="flex flex-col md:flex-row justify-between gap-6">
                                <div className="space-y-4 flex-1">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                            <User size={14} className="text-rose-500" />
                                            {msg.full_name || msg.name}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                            <Mail size={14} />
                                            {msg.email}
                                        </div>
                                        {msg.phone && (
                                            <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                                <Phone size={14} />
                                                {msg.phone}
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 uppercase tracking-wider ml-auto">
                                            <Calendar size={14} />
                                            {new Date(msg.created_at).toLocaleString('tr-TR')}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 relative">
                                        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                                        {msg.service_type && (
                                            <div className="absolute top-4 right-4 px-2 py-0.5 bg-rose-100 text-rose-600 text-[10px] font-bold rounded uppercase tracking-tighter">
                                                {msg.service_type}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="md:self-start flex md:flex-col gap-2">
                                    <button 
                                        onClick={() => handleDelete(msg.id)}
                                        className="p-3 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all active:scale-95"
                                        title="Sil"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Submissions;
