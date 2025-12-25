import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, User, Calendar, Award, Filter, Search, TrendingUp } from 'lucide-react';

const StudentWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: '3dsmax',
      title: 'Modern Villa Tasarımı',
      student: 'Ahmet Yılmaz',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      desc: 'Fotorealistik mimari görselleştirme çalışması. Modern villa tasarımı ve render.',
      date: 'Aralık 2026',
      tools: ['3DS Max', 'V-Ray', 'Photoshop']
    },
    {
      id: 2,
      category: 'ansys',
      title: 'Köprü Mukavemet Analizi',
      student: 'Mehmet Demir',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      desc: 'Statik ve mukavemet testi. Köprü yapısının yük altında davranış analizi.',
      date: 'Kasım 2026',
      tools: ['ANSYS', 'SolidWorks']
    },
    {
      id: 3,
      category: 'autocad',
      title: 'Ofis Kat Planı',
      student: 'Ayşe Kaya',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
      desc: 'Detaylı mimari kat planı çizimi. 500m² ofis alanı tasarımı.',
      date: 'Ekim 2026',
      tools: ['AutoCAD', 'Revit']
    },
    {
      id: 4,
      category: 'solidworks',
      title: 'V8 Motor Montajı',
      student: 'Can Öztürk',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100',
      desc: 'V8 Motor parçaları ve montaj animasyonu. Detaylı mekanik tasarım.',
      date: 'Eylül 2026',
      tools: ['SolidWorks', 'KeyShot']
    },
    {
      id: 5,
      category: 'grafik',
      title: 'Kurumsal Kimlik Tasarımı',
      student: 'Zeynep Arslan',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
      desc: 'Marka kimliği ve logo tasarımı. Kurumsal renk paleti ve tipografi.',
      date: 'Ağustos 2026',
      tools: ['Illustrator', 'Photoshop']
    },
    {
      id: 6,
      category: '3dsmax',
      title: 'İç Mekan Render',
      student: 'Burak Yıldız',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100',
      desc: 'Modern oturma odası iç mekan tasarımı ve fotorealistik render.',
      date: 'Temmuz 2026',
      tools: ['3DS Max', 'Corona', 'Photoshop']
    },
    {
      id: 7,
      category: 'web',
      title: 'E-Ticaret Platformu',
      student: 'Elif Şahin',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
      desc: 'Modern e-ticaret web sitesi tasarımı ve frontend geliştirme.',
      date: 'Haziran 2026',
      tools: ['React', 'Tailwind', 'Node.js']
    },
    {
      id: 8,
      category: 'autocad',
      title: 'Endüstriyel Tesis Planı',
      student: 'Emre Kılıç',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      studentImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      desc: 'Fabrika yerleşim planı ve detay çizimleri. Elektrik ve mekanik tesisat.',
      date: 'Mayıs 2026',
      tools: ['AutoCAD', 'AutoCAD MEP']
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: projects.length },
    { id: '3dsmax', name: '3DS Max', count: projects.filter(p => p.category === '3dsmax').length },
    { id: 'autocad', name: 'AutoCAD', count: projects.filter(p => p.category === 'autocad').length },
    { id: 'solidworks', name: 'SolidWorks', count: projects.filter(p => p.category === 'solidworks').length },
    { id: 'ansys', name: 'ANSYS', count: projects.filter(p => p.category === 'ansys').length },
    { id: 'grafik', name: 'Grafik', count: projects.filter(p => p.category === 'grafik').length },
    { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-purple-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ scale: [1, 1.4, 1], x: [0, -100, 0] }}
        transition={{ duration: 35, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">
            Öğrenci Portföyü
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Öğrenci Çalışmaları</h1>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Eğitimlerimizi tamamlayan öğrencilerimizin başarılı proje çalışmaları.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-10 border-b border-slate-200 pb-6"
        >
          <div className="flex items-center gap-2 text-slate-400 mr-2">
            <Filter size={16} />
            <span className="text-xs font-bold uppercase">Filtrele:</span>
          </div>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl shadow-purple-500/30'
                  : 'bg-white text-slate-500 hover:bg-slate-100'
              }`}
            >
              {cat.name}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-100'
              }`}>
                {cat.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10, rotateZ: 1, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black text-slate-900 uppercase shadow-lg">
                    {categories.find(c => c.id === project.category)?.name}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] line-clamp-2 mb-4">
                    {project.desc}
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-50">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md"
                    >
                      <img src={project.studentImg} className="w-full h-full object-cover" alt={project.student} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-900">{project.student}</div>
                      <div className="text-[10px] text-slate-400">{project.date}</div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md"
                    >
                      <ExternalLink size={14} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Award size={24} />, value: '500+', label: 'Tamamlanan Proje', color: 'from-purple-50 to-purple-100 text-purple-600' },
              { icon: <User size={24} />, value: '200+', label: 'Başarılı Öğrenci', color: 'from-blue-50 to-blue-100 text-blue-600' },
              { icon: <TrendingUp size={24} />, value: '%95', label: 'İstihdam Oranı', color: 'from-green-50 to-green-100 text-green-600' },
              { icon: <Calendar size={24} />, value: '15+', label: 'Yıllık Deneyim', color: 'from-rose-50 to-rose-100 text-rose-600' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2rem] max-w-3xl w-full overflow-hidden shadow-2xl"
              >
                <div className="aspect-video relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 shadow-xl hover:bg-white transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedProject.title}</h2>
                      <p className="text-slate-500 text-sm">{selectedProject.desc}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-md">
                        <img src={selectedProject.studentImg} className="w-full h-full object-cover" alt={selectedProject.student} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Öğrenci</div>
                        <div className="text-sm font-bold text-slate-900">{selectedProject.student}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Tarih</div>
                        <div className="text-sm font-bold text-slate-900">{selectedProject.date}</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-3">Kullanılan Araçlar</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-xs font-bold"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StudentWorks;
