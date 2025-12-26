import React from 'react';
import { 
  PenTool, Monitor, Video, Globe, Settings, ShieldCheck, 
  GraduationCap, Briefcase, Star
} from 'lucide-react';

export const SITE_DATA = {
  slider: [
    {
      title: "Bilgisayar & IT Kursları",
      sub: "Office Programları - Word | Excel | Powerpoint / Yazılım Uzmanlığı - C# | Java | Python",
      badge: "Kariyer Odaklı Eğitim"
    },
    {
      title: "Çizim & Tasarım Kursları",
      sub: "AutoCAD | SolidWorks | Catia | 3Ds MAX | CNC Operatörlüğü",
      badge: "Teknik Uzmanlık"
    },
    {
      title: "Grafik & Tasarım Kursları",
      sub: "Photoshop | Illustrator | InDesign | CorelDRAW",
      badge: "Yaratıcı Dünya"
    }
  ],
  homepage: {
    intro: "Geniş eğitim yelpazemiz içinde CAD CAM CNC, Yazılım Uzmanlığı, Sistem Uzmanlığı, Bilgisayar İşletmenliği, Bilgisayar Programcılığı, Web programcılığı, AutoCad, Catıa, 3D Max, Grafik Tasarımı, SoliWorks eğitimleri ve diğer teknik kusları vardır. Eğitim merkezimiz kursiyerlerine iyi bir eğitim vermenin yanında çeşitli iş imkanlarıda sağlamaktadır. Eğitim alan kursiyerler aldıkları pratik eğitimlerle girdikleri her alanda 'İkiteknik Bilişim' farkını ortaya koymaktadır. İkiteknik Bilişim egitmen tecrübesi ve egitim kalitesiyle Ankarada 1 Numaradır."
  },
  education_page: {
    title: "Eğitimlerimiz",
    breadcrumbs: ["Anasayfa", "Eğitimlerimiz"],
    categories: [
      {
        id: "featured",
        title: "Öne Çıkanlar",
        icon: <Star />,
        description: "ikiteknik Bilişim bünyesinde en çok tercih edilen ve kariyer basamaklarında size en büyük ivmeyi kazandıracak öne çıkan eğitimlerimiz.",
        courses: [
          "Yazılım Uzmanlığı", "AutoCAD Kursu", "Sistem Uzmanlığı", "SolidWorks Kursu", 
          "Grafik Tasarım", "3DS Max Kursu", "Python Programlama", "Catia Kursu"
        ]
      },
      {
        id: "drawing",
        title: "Çizim & Tasarım Eğitimleri",
        icon: <PenTool />,
        description: "Teknik Eğitimlerin temeli olan Autocad Kursundan, Makina Tasarım için Catia - SolidWorks - CNC Kursu gibi eğitimlerin yanı sıra 3 Boyutlu Modelleme Eğitimleri 3d Max Kursları düzenlemekteyiz.",
        courses: [
          "AutoCAD Kursu", "Catia Kursu", "SolidWorks Kursu", "CAD CAM CNC Kursu", 
          "3DS Max Mimari Kursu", "Xsteel Kursu", "Autodesk Revit Kursu", 
          "Autodesk Revit Mep Kursu", "CNC Operatörlük Kursu", "SolidCam", 
          "AutoCAD ile Elektrik İç Tesisat Eğitimi", "Teknik Resim Kursu", 
          "Autodesk Inventor Kursu", "3D Studio Max Kursu", 
          "Autodesk AutoCAD Civil 3D Kursu", "AutoCAD Mechanical Kursu", "V-Ray Kursu"
        ]
      },
      {
        id: "it",
        title: "Bilgisayar & IT Eğitimleri",
        icon: <Monitor />,
        description: "Uzmanlık eğitimlerinin başında gelen Yazılım Uzmanlığı kursu ve Sistem Uzmanlığı kurslarının yanı sıra, Bilgisayar İşletmenlik kursları, Bakım Onarım, Java ile Programlama, Unity3D gibi eğitimler düzenlemekteyiz.",
        courses: [
          "Yazılım Uzmanlığı - Başlangıç", "Yazılım Uzmanlığı - İleri", 
          "Ağ ve Sistem Yöneticiliği - Başlangıç", "Ağ ve Sistem Yöneticiliği - İleri", 
          "Donanım ve Network Kursu", "Bilgisayar İşletmenliği", "Ms Office 2016 Kursu", 
          "MS SQL Server Kursu", "Java Kursu", "Temel Unity3D Programlama Kursu", 
          "Robotik Kodlama", "10 Parmak Klavye Kursu", "PLC Otomasyon Kursu(Temel Seviye)", 
          "PLC Otomasyon Kursu(İleri Seviye)", "Python - Temel ve Orta seviye", 
          "Python - İleri seviye", "PIC Programlama Kursu", "Arduino Programlama Kursu", 
          "İleri Unity3D Programlama Kursu"
        ]
      },
      {
        id: "animation",
        title: "Animasyon Eğitimleri",
        icon: <Video />,
        description: "Animasyon konusundaki tecrübemiz ve Autodesk Maya, 3DS Max Animasyon Kursu, Adobe Premiere, Adobe After Effects Kurslarımızla sizi animasyon sektörüne kazandırıyoruz.",
        courses: [
          "Maya Temelleri ile Animasyon", "Maya Modelleme ile Animasyon", 
          "3DS Max Animasyon Kursu", "Adobe Premiere Kursu", "Adobe After Effects Kursu", 
          "Maya ile Tasarım", "Adobe Flash Pro Animasyon Kursu", "3DS Max ile Karakter Modelleme"
        ]
      },
      {
        id: "graphics",
        title: "Grafik & Web Tasarım Eğitimleri",
        icon: <Globe />,
        description: "Kendi desen ve tasarımlarınızı çıkarıp, web sayfaları için özgün tasarımlar oluşturmak için ihtiyacınız olan tüm programların ve araçların eğitimlerini düzenlemekteyiz.",
        courses: [
          "Web Tasarım Kursu", "Grafik Tasarım Kursu", "İleri düzey Web Tasarım Kursu", 
          "Photoshop Kursu", "Adobe Illustrator Kursu", "Joomla Kursu"
        ]
      },
      {
        id: "analysis",
        title: "Analiz",
        icon: <Settings />,
        description: "Kızılay'da; ANSYS, ANSYS Fluent, Sap2000, Xsteel, STA4CAD programları grup Kurslarının yanı sıra kurumsal eğitim hizmetlerimizi alarak bilgisayar ortamında 'Analiz' konusunda profesyonelleşme fırsatu sunuyoruz.",
        courses: ["ANSYS Kursu", "ANSYS Fluent Kursu", "Sap2000 Kursu", "STA4CAD Kursu"]
      },
      {
        id: "quality",
        title: "Kalite",
        icon: <ShieldCheck />,
        description: "Üretim Parçası Onay Prosesi(PPAP), bir ürünün tasarım ve üretimi ile ilişkili olarak çıkabilecek hata türleri ve nedenlerinin tanımlanması ve değerlendirilmesine ilişkin FMEA Eğitimi,ISO 9001:2008, OHSAS -18001",
        courses: [
          "FMEA Eğitimi", "PPAP Eğitimi", "5S Eğitimi", "ISO 9001:2015 Eğitimi", 
          "OHSAS- 18001 Eğitimi", "ISO 14001:2015 Eğitimi", "ISO 9001 İç Tetkik Eğitimi", 
          "IATF 16949 Eğitimi", "IATF 16949 İç Denetçilik Eğitimi", 
          "Kaizen (Sürekli İyileştirme) Eğitimi", "ISO 27001 Bilgi Güvenliği Yönetim", 
          "Süreç Yönetimi", "İstatistiksel Proses Kontrol SPC", "Problem Çözme Teknikleri", 
          "ISO 10002 Müşteri Şikayetleri", "TS EN ISO IEC 17025 Laboratuar Akreditasyonu"
        ]
      },
      {
        id: "corporate_edu",
        title: "Kurumsal Eğitimler",
        icon: <GraduationCap />,
        description: "Kurumsal eğitimlerimiz donanımlı ve ferah dersliklerimizde, kaliteli eğitmen ve müfredatımızla hizmetinizdeyiz.",
        courses: [
          "C (Sharp) Eğitimi", "Ms Project Eğitimi", "Linux Ubuntu Eğitimi", 
          "Suse Linux Eğitimi", "OpenOffice Eğitimi", "ASP.NET MVC Eğitimi", 
          "Exchange Server Eğitimi", "MS Sql Server ve Ado.Net", "LibreOffice Eğitimi", 
          "Microsoft Office Eğitimleri", "Adobe Photoshop Eğitim", 
          "Adobe After Effects Eğitimi", "Adobe Premiere Eğitimi", 
          "Adobe Flash Pro. Eğitimi", "Adobe Dreamweaver", "Adobe Illustrator Eğitimi", 
          "Adobe Freehand Eğitimi", "Adobe Fireworks Eğitimi"
        ]
      },
      {
        id: "corporate_srv",
        title: "Kurumsal Hizmetler",
        icon: <Briefcase />,
        description: "Sizin İçin Projelerinizi ve Hayalerinizi Hayata Geçirir, Tasarımlarınız 3 boyutlu olarak hazırlar, Sunumlarınızı tek kare resim veya animasyon olarak hazırlayabiliriz.",
        courses: [
          "Makina Tasarım", "Mimari Tasarım", "Karakter Animasyonu", "Mimari Animasyon", 
          "Web Tasarım", "Mekanik Animasyon", "Teknik Animasyon", "Montaj Animasyonu", 
          "Kurumsal Logo Animasyonu", "Kablolama ve Networking", "Kurumsal Kimlik", 
          "Kurumsal Karakter Tasarımı", "Website Optimizasyonu SEO", "İnternet Reklamcılığı"
        ]
      }
    ]
  },
  references: ["SGK", "Rekabet Kurumu", "Enerji Bakanlığı", "Adli Tıp Kurumu", "Hacettepe Üniversitesi", "Gazi Üniversitesi", "TUSAŞ", "ASELSAN", "HAVELSAN"],
  contact: {
    address: "İzmir-2 Cd. No:43/16 Kızılay / Ankara",
    phones: ["+90 312 231 31 35", "+90 312 232 26 13"],
    whatsapp: "+90 507 587 35 31",
    emails: ["iletisim@ikiteknik.com", "kayit@ikiteknik.com"]
  }
};
