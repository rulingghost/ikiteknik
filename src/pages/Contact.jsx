import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, MessageCircle, Clock, Navigation } from 'lucide-react';
import { SITE_DATA } from '../constants';
import OptimizedImage from '../components/OptimizedImage';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Genel Bilgi',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null); // 'success' | 'error' | null
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'Genel Bilgi',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const officeImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
  ];

  const teamPhotos = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
  ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-green-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Image */}
        <div 
          className="max-w-xl mb-12 animate-fade-in"
        >
             <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">İletişim</div>
             <h1 className="text-3xl font-bold text-slate-900 mb-2">Bize Ulaşın</h1>
             <p className="text-slate-500 text-sm">Eğitimler hakkında detaylı bilgi almak veya ziyaret etmek için.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
             
             {/* Info Cards */}
             <div className="space-y-6">
                 <div 
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all overflow-hidden animate-slide-up"
                    style={{ transformStyle: "preserve-3d" }}
                 >
                     <div className="h-48 relative overflow-hidden group">
                        <OptimizedImage 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            alt="Office Building" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div 
                            className="absolute bottom-4 left-4 animate-bounce"
                        >
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-xl">
                                <MapPin size={24} />
                            </div>
                        </div>
                     </div>
                     <div className="p-8">
                         <h3 className="text-lg font-bold text-slate-900 mb-3">Merkez Ofis</h3>
                         <p className="text-slate-500 text-sm leading-relaxed mb-6">{SITE_DATA.contact.address}</p>
                         <button
                            className="flex items-center gap-2 text-rose-600 text-xs font-bold hover:gap-3 transition-all hover:scale-110"
                         >
                            <Navigation size={14} />
                            Yol Tarifi Al
                         </button>
                     </div>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-4">
                     <div 
                        className="bg-white p-6 rounded-[1.5rem] border border-slate-100 flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:rotate-1 transition-all cursor-pointer animate-scale-in"
                        style={{ animationDelay: '0.1s' }}
                     >
                         <div 
                            className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shadow-md animate-bounce"
                         >
                             <Phone size={20} />
                         </div>
                         <h4 className="text-sm font-bold text-slate-900">Telefon</h4>
                         <p className="text-slate-500 text-xs font-medium">{SITE_DATA.contact.phones[0]}</p>
                     </div>
                     <div 
                        className="bg-white p-6 rounded-[1.5rem] border border-slate-100 flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:-rotate-1 transition-all cursor-pointer animate-scale-in"
                        style={{ animationDelay: '0.2s' }}
                     >
                         <div 
                            className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-md animate-pulse"
                         >
                             <Mail size={20} />
                         </div>
                         <h4 className="text-sm font-bold text-slate-900">E-Posta</h4>
                         <p className="text-slate-500 text-xs font-medium lowercase">info@ikiteknik.com</p>
                     </div>
                 </div>

                 {/* Office Hours */}
                 <div
                    className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-[1.5rem] text-white relative overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
                    style={{ animationDelay: '0.3s' }}
                 >
                    <div className="absolute inset-0 opacity-10">
                        <OptimizedImage src="https://images.unsplash.com/photo-1557804506-669a67965ba0" className="w-full h-full object-cover" alt="Office" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="animate-spin-slow"
                            >
                                <Clock className="text-rose-400" size={24} />
                            </div>
                            <h4 className="text-sm font-bold">Çalışma Saatleri</h4>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Hafta İçi:</span>
                                <span className="font-bold">09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Cumartesi:</span>
                                <span className="font-bold">10:00 - 16:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Pazar:</span>
                                <span className="font-bold text-rose-400">Kapalı</span>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>

             {/* Form */}
             <div 
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-2xl relative overflow-hidden animate-fade-in hover:scale-[1.01] transition-transform duration-500"
                style={{ animationDelay: '0.4s' }}
             >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent rounded-bl-full opacity-50" />
                 
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Mesaj Gönderin</h3>
                    <p className="text-slate-500 text-xs mb-6">Size en kısa sürede dönüş yapacağız.</p>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Adınız</label>
                                <input 
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white focus:scale-[1.02] transition-all text-slate-900 shadow-sm" 
                                    placeholder="İsim" 
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Soyadınız</label>
                                <input 
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white focus:scale-[1.02] transition-all text-slate-900 shadow-sm" 
                                    placeholder="Soyisim" 
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">E-Posta</label>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white focus:scale-[1.02] transition-all text-slate-900 shadow-sm" 
                                placeholder="ornek@email.com" 
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Konu</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white focus:scale-[1.02] transition-all text-slate-900 shadow-sm"
                            >
                                <option>Genel Bilgi</option>
                                <option>Kayıt Olmak İstiyorum</option>
                                <option>Eğitim Takvimi</option>
                                <option>Kurumsal Eğitim</option>
                                <option>3D Tarama Hizmeti</option>
                                <option>3D Modelleme Hizmeti</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Mesajınız</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={4} 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white focus:scale-[1.02] transition-all resize-none text-slate-900 shadow-sm" 
                                placeholder="Sorunuzu buraya yazın..." 
                            />
                        </div>
                        
                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                                ✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                                ✗ Bir hata oluştu. Lütfen tekrar deneyin.
                            </div>
                        )}
                        
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-rose-500/30 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Gönderiliyor...
                                </>
                            ) : (
                                <>
                                    Gönder <Send size={16} />
                                </>
                            )}
                        </button>
                    </form>
                 </div>
             </div>
        </div>

        {/* Office Gallery */}
        <div
            className="mb-12 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
        >
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Ofisimizden Görüntüler</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {officeImages.map((img, i) => (
                    <div
                        key={i}
                        className="aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 animate-scale-in"
                        style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                    >
                        <OptimizedImage src={img} className="w-full h-full object-cover" alt={`Office ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>

        {/* Social & Team */}
        <div className="grid md:grid-cols-2 gap-6">
            {/* Social Media */}
            <div
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:scale-[1.01] transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: '0.8s' }}
            >
                <h3 className="text-lg font-bold text-slate-900 mb-6">Sosyal Medyada Biz</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { icon: <Facebook size={24} />, name: 'Facebook', color: 'from-blue-600 to-blue-700', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113' },
                        { icon: <Instagram size={24} />, name: 'Instagram', color: 'from-pink-600 to-purple-600', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0' },
                        { icon: <Linkedin size={24} />, name: 'LinkedIn', color: 'from-blue-700 to-blue-800', img: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c' },
                        { icon: <MessageCircle size={24} />, name: 'WhatsApp', color: 'from-green-600 to-green-700', img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432' },
                    ].map((social, i) => (
                        <button
                            key={social.name}
                            className={`bg-gradient-to-br ${social.color} text-white p-4 rounded-xl flex flex-col items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all relative overflow-hidden animate-scale-in`}
                            style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                        >
                            <div className="absolute inset-0 opacity-20">
                                <OptimizedImage src={social.img} className="w-full h-full object-cover" alt={social.name} />
                            </div>
                            <div className="relative z-10">
                                {social.icon}
                            </div>
                            <span className="text-xs font-bold relative z-10">{social.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Contact Team */}
            <div
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: '1s' }}
            >
                <div className="absolute inset-0 opacity-10">
                    <OptimizedImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" className="w-full h-full object-cover" alt="Team" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-4">Danışma Ekibimiz</h3>
                    <p className="text-slate-400 text-xs mb-6">Size yardımcı olmak için buradayız!</p>
                    <div className="flex -space-x-4 mb-6">
                        {teamPhotos.map((photo, i) => (
                            <div
                                key={i}
                                className="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden shadow-xl hover:scale-125 hover:z-10 transition-transform duration-300 animate-scale-in"
                                style={{ animationDelay: `${1.1 + i * 0.1}s` }}
                            >
                                <OptimizedImage src={photo} className="w-full h-full object-cover" alt={`Team ${i + 1}`} />
                            </div>
                        ))}
                        <div
                            className="w-12 h-12 rounded-full border-4 border-slate-900 bg-white text-slate-900 flex items-center justify-center text-xs font-bold shadow-xl animate-scale-in"
                            style={{ animationDelay: '1.4s' }}
                        >
                            +5
                        </div>
                    </div>
                    <button
                        className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-rose-50 hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        Hemen Ara
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
