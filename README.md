# İki Teknik Bilişim - Web Sitesi

Modern ve profesyonel bir teknik eğitim merkezi web sitesi. React, Tailwind CSS ve Vite ile geliştirilmiştir.

## 🚀 Özellikler

### 📚 Eğitim Hizmetleri
- **9 Farklı Kategori**: Çizim & Tasarım, Bilgisayar & IT, Animasyon, Grafik & Web Tasarım, vb.
- **100+ Kurs**: AutoCAD, SolidWorks, Python, Grafik Tasarım ve daha fazlası
- **Arama ve Filtreleme**: Kullanıcı dostu kurs arama sistemi
- **Detaylı Kurs Bilgileri**: Her kurs için kapsamlı açıklamalar

### 🔬 3D Tarama Hizmetleri
- **Lazer 3D Tarama**: Yüksek hassasiyetli endüstriyel tarama
- **Yapılandırılmış Işık Tarama**: Detaylı parça taraması
- **El Tipi 3D Tarama**: Sahada esnek tarama
- **Fotogrametri**: Büyük ölçekli dijitalleştirme

### 🎨 3D Modelleme Hizmetleri
- **Ürün 3D Modelleme**: Profesyonel ürün tasarımı
- **Endüstriyel Modelleme**: Teknik hassasiyet
- **3D Baskıya Uygun Modelleme**: Üretim için optimize edilmiş
- **Tersine Mühendislik**: Fiziksel ürünleri dijitale dönüştürme

### 💼 Diğer Özellikler
- ✅ Responsive tasarım (Mobil, Tablet, Desktop)
- ✅ Modern UI/UX tasarımı
- ✅ Glassmorphism ve 3D efektler
- ✅ Lazy loading ile performans optimizasyonu
- ✅ SEO optimizasyonu
- ✅ İletişim formu (state management ile)
- ✅ WhatsApp entegrasyonu
- ✅ Sosyal medya linkleri
- ✅ Eğitim takvimi
- ✅ Öğrenci çalışmaları galerisi
- ✅ Blog/Makaleler bölümü

## 🛠️ Teknolojiler

- **React 19.2.3** - Modern UI framework
- **Vite 5.0** - Hızlı build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Router DOM 7.11.0** - Client-side routing
- **Lucide React** - Modern icon library

## 📁 Proje Yapısı

```
web/
├── public/
│   └── images/
│       ├── 3d-tarama/        # 3D Tarama görselleri (13 adet)
│       └── 3d-modelleme/     # 3D Modelleme görselleri (19 adet)
├── src/
│   ├── components/
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── OptimizedImage.jsx # Image optimization
│   ├── pages/
│   │   ├── Home.jsx          # Ana sayfa
│   │   ├── Courses.jsx       # Eğitimler
│   │   ├── About.jsx         # Hakkımızda
│   │   ├── Contact.jsx       # İletişim (Form ile)
│   │   ├── Calendar.jsx      # Eğitim takvimi
│   │   ├── StudentWorks.jsx  # Öğrenci çalışmaları
│   │   ├── Articles.jsx      # Blog/Makaleler
│   │   ├── PearsonVue.jsx    # Pearson Vue bilgileri
│   │   ├── Scanning3D.jsx    # 3D Tarama hizmetleri
│   │   └── Modeling3D.jsx    # 3D Modelleme hizmetleri
│   ├── utils/
│   │   └── cn.js             # Class name utility
│   ├── App.jsx               # Main app component
│   ├── constants.jsx         # Site data & constants
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build

# Production build'i önizle
npm run preview
```

### Development
Proje `http://localhost:5173` adresinde çalışacaktır.

## 📄 Sayfalar ve Route'lar

| Sayfa | Route | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `/` | Hero, hizmetler, istatistikler |
| Eğitimler | `/egitimlerimiz` | Tüm kurslar ve kategoriler |
| 3D Tarama | `/3d-tarama` | 3D tarama hizmetleri |
| 3D Modelleme | `/3d-modelleme` | 3D modelleme hizmetleri |
| Eğitim Takvimi | `/takvim` | Kurs başlangıç tarihleri |
| Öğrenci Çalışmaları | `/calismalar` | Portfolyo galerisi |
| Makaleler | `/makaleler` | Blog yazıları |
| Hakkımızda | `/hakkimizda` | Şirket bilgileri |
| Pearson Vue | `/pearson` | Sınav merkezi bilgileri |
| İletişim | `/iletisim` | İletişim formu ve bilgiler |

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary**: Rose/Pink (#E11D48)
- **Secondary**: Slate (#0F172A)
- **Accent**: Blue, Purple, Green (Hizmetlere göre)
- **Background**: Slate-50 (#F8FAFC)

### Animasyonlar
- Fade in/out
- Slide up
- Scale in
- Pulse slow
- Spin slow
- 3D tilt effects
- Glassmorphism

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📞 İletişim Bilgileri

- **Adres**: İzmir-2 Cd. No:43/16 Kızılay / Ankara
- **Telefon**: +90 312 231 31 35 / +90 312 232 26 13
- **WhatsApp**: +90 507 587 35 31
- **E-posta**: iletisim@ikiteknik.com

## 🔄 Güncellemeler

### v1.0.0 (2026-01-20)
- ✅ İlk sürüm yayınlandı
- ✅ 3D Tarama hizmetleri eklendi
- ✅ 3D Modelleme hizmetleri eklendi
- ✅ İletişim formu state management ile güncellendi
- ✅ 32 adet gerçek görsel entegre edildi
- ✅ SEO optimizasyonları yapıldı
- ✅ Responsive tasarım iyileştirildi

## 📝 Yapılacaklar

- [ ] Backend API entegrasyonu
- [ ] Form verilerini email ile gönderme
- [ ] Admin paneli
- [ ] Kurs kayıt sistemi
- [ ] Online ödeme entegrasyonu
- [ ] Çoklu dil desteği (İngilizce)
- [ ] Dark mode toggle
- [ ] PWA desteği
- [ ] Google Analytics entegrasyonu
- [ ] Sitemap oluşturma
- [ ] Blog CMS entegrasyonu

## 📄 Lisans

© 2024 İki Teknik Bilişim. Tüm hakları saklıdır.

## 👨‍💻 Geliştirici Notları

### Form Kullanımı
İletişim formu React state management kullanır. Form gönderimi şu anda simüle edilmiştir. Gerçek backend entegrasyonu için `Contact.jsx` dosyasındaki `handleSubmit` fonksiyonunu güncelleyin.

### Görseller
Görseller `/public/images/` klasöründe saklanır. OptimizedImage component'i kullanılarak lazy loading yapılır.

### Stil Güncellemeleri
Global stiller `src/index.css` dosyasında, Tailwind konfigürasyonu `tailwind.config.js` dosyasındadır.

### Yeni Sayfa Ekleme
1. `src/pages/` klasörüne yeni component ekleyin
2. `src/App.jsx` dosyasına lazy import ve route ekleyin
3. `src/components/Navbar.jsx` dosyasına nav item ekleyin
4. İsteğe bağlı olarak Footer'a link ekleyin
