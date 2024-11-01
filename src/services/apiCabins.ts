import { TCabin } from '../types/cabin.type';
import supabase from './supabase';

export const getCabins = async (): Promise<TCabin[]> => {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded!');
  }

  return data;
};

export const deleteCabin = async (id: string) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted!');
  }

  return data;
};
