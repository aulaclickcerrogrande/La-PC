import { supabase } from './config';

export const collections = {
    EXTERNAL: 'external_components',
    INTERNAL: 'internal_components'
};

export const syncDataToSupabase = async (data, tableName) => {
    // Upsert data based on ID
    const { error } = await supabase
        .from(tableName)
        .upsert(data, { onConflict: 'id' });

    if (error) throw error;
};

export const getAllComponents = async (tableName) => {
    const { data, error } = await supabase
        .from(tableName)
        .select('*');

    if (error) throw error;
    return data;
};

export const updateComponent = async (tableName, id, updates) => {
    const { error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id);

    if (error) throw error;
};

export const uploadImage = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
        .from('component-images')
        .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
        .from('component-images')
        .getPublicUrl(filePath);

    return data.publicUrl;
};
