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
