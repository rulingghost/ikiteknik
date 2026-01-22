import { supabase } from './supabaseClient';

export const uploadFile = async (file, bucket = 'files', folder = 'uploads') => {
    if (!file) return null;

    try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
        const filePath = `${folder}/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from(bucket)
            .upload(filePath, file);

        if (uploadError) {
            console.error('Error uploading file:', uploadError);
            throw uploadError;
        }

        const { data } = supabase.storage
            .from(bucket)
            .getPublicUrl(filePath);

        return data.publicUrl;
    } catch (error) {
        console.error('Upload function error:', error);
        return null;
    }
};

export const deleteFile = async (url, bucket = 'files') => {
    try {
        if (!url) return;
        const path = url.split(`${bucket}/`)[1];
        if (!path) return;

        const { error } = await supabase.storage
            .from(bucket)
            .remove([path]);
            
        if (error) throw error;
    } catch (error) {
        console.error('Delete file error:', error);
    }
};
