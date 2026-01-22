import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Check, Loader2 } from 'lucide-react';
import { supabase } from '../../utils/supabaseClient';

const ImageUpload = ({ onUploadComplete, initialImage = '', folder = 'uploads', multiple = false, bucket = 'files' }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(initialImage);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  React.useEffect(() => {
    setPreview(initialImage);
  }, [initialImage]);

  // Handle file selection
  const handleFile = async (files) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    try {
      if (multiple) {
        // Multi-file upload logic
        const uploadedUrls = [];
        const totalFiles = files.length;
        
        for (let i = 0; i < totalFiles; i++) {
          const file = files[i];
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
          const filePath = `${folder}/${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from(bucket) // Use dynamic bucket name
            .upload(filePath, file);

          if (uploadError) throw uploadError;

          const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
          uploadedUrls.push(data.publicUrl);
          
          // Update progress
          setUploadProgress(Math.round(((i + 1) / totalFiles) * 100));
        }
        
        onUploadComplete(uploadedUrls); // Return array of URLs

      } else {
        // Single file upload logic
        const file = files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${folder}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
        setPreview(data.publicUrl);
        onUploadComplete(data.publicUrl); // Return single URL string
        setUploadProgress(100);
      }
    } catch (error) {
      console.error('Upload Error:', error);
      alert('Yükleme sırasında hata oluştu: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Drag and Drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  const clearImage = () => {
    setPreview('');
    if (!multiple) onUploadComplete('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full">
      {!preview && !multiple ? (
        <div 
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
            dragActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-slate-300 hover:border-slate-400 bg-slate-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple={multiple}
            className="hidden"
            onChange={handleChange}
            accept="image/*"
          />
          
          {uploading ? (
            <div className="flex flex-col items-center py-4">
              <Loader2 className="animate-spin text-blue-600 mb-4" size={32} />
              <p className="text-sm font-medium text-slate-600">
                Yükleniyor... {uploadProgress}%
              </p>
              <div className="w-48 h-1 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className={`p-4 rounded-full mb-4 ${dragActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                <Upload size={24} />
              </div>
              <p className="text-sm font-bold text-slate-700 mb-1">
                {multiple ? 'Görselleri buraya sürükleyin' : 'Görseli buraya sürükleyin'}
              </p>
              <p className="text-xs text-slate-500 mb-4">
                veya dosya seçmek için tıklayın
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                Bilgisayarımdan Seç
              </button>
            </div>
          )}
        </div>
      ) : (
        // Preview State (Only for single image mode, multiple mode handles preview in parent)
        !multiple && (
            <div className="relative group rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img 
                src={preview} 
                alt="Upload preview" 
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg backdrop-blur-sm transition-colors"
                title="Değiştir"
                >
                <Upload size={18} />
                </button>
                <button
                type="button"
                onClick={clearImage}
                className="p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-lg backdrop-blur-sm transition-colors"
                title="Kaldır"
                >
                <X size={18} />
                </button>
            </div>
            <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-md shadow-sm flex items-center gap-1">
                <Check size={12} /> Yüklendi
            </div>
            </div>
        )
      )}
      
      {multiple && !uploading && (
          <div 
          className="border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-xl p-8 text-center bg-slate-50 cursor-pointer transition-colors"
          onClick={() => fileInputRef.current?.click()}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          >
           <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleChange}
            accept="image/*"
          />
          <Upload className="mx-auto text-slate-400 mb-3" size={32} />
          <p className="text-sm font-medium text-slate-600">Yeni Dosyalar Ekle</p>
          <p className="text-xs text-slate-400 mt-1">Sürükle bırak veya tıkla</p>
        </div>
      )}

       {multiple && uploading && (
            <div className="flex flex-col items-center py-8 border-2 border-dashed border-blue-200 bg-blue-50 rounded-xl">
              <Loader2 className="animate-spin text-blue-600 mb-4" size={32} />
              <p className="text-sm font-medium text-slate-600">
                Toplu yükleme yapılıyor... {uploadProgress}%
              </p>
              <div className="w-1/2 h-1 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
       )}
    </div>
  );
};

export default ImageUpload;
