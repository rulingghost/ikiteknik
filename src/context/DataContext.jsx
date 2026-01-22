import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        products: [],
        articles: [],
        gallery: [],
        courses: [],
        events: [],
        submissions: []
    });
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [
                { data: products },
                { data: articles },
                { data: gallery },
                { data: courses },
                { data: events },
                { data: submissions }
            ] = await Promise.all([
                supabase.from('products').select('*').order('created_at', { ascending: false }),
                supabase.from('articles').select('*').order('created_at', { ascending: false }),
                supabase.from('gallery').select('*').order('created_at', { ascending: false }),
                supabase.from('courses').select('*').order('created_at', { ascending: false }),
                supabase.from('events').select('*').order('created_at', { ascending: false }),
                supabase.from('submissions').select('*').order('created_at', { ascending: false })
            ]);

            setData({
                products: products || [],
                articles: articles || [],
                gallery: gallery || [],
                courses: courses || [],
                events: events || [],
                submissions: submissions || []
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Helper functions for CRUD
    const refreshData = () => fetchData();

    // Specific add functions
    const addGalleryItem = async (item) => {
        const { data: newItem, error } = await supabase.from('gallery').insert([item]).select();
        if (error) return { success: false, error: error.message };
        await refreshData();
        return { success: true, data: newItem[0] };
    };

    const addProduct = async (product) => {
        const { data: newItem, error } = await supabase.from('products').insert([product]).select();
        if (error) return { success: false, error: error.message };
        await refreshData();
        return { success: true, data: newItem[0] };
    };

    const addArticle = async (article) => {
        const { data: newItem, error } = await supabase.from('articles').insert([article]).select();
        if (error) return { success: false, error: error.message };
        await refreshData();
        return { success: true, data: newItem[0] };
    };

    return (
        <DataContext.Provider value={{ ...data, loading, refreshData, addGalleryItem, addProduct, addArticle }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
