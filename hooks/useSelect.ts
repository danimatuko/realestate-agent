import { useRef } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import supabase from '../supabase/config';
import { IAsset } from '../interface/IAsset';

const useSelect = (table: string, id?: string) => {
  const [data, setData] = useState<IAsset[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);
  // base query
  const query = useRef(supabase.from(table).select()); // useRef hook to avoid infinite loop
  // filters
  if (id) query.current = query.current.eq('id', id);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await query.current;

      if (error) {
        setError(error);
        console.error(error);
      }
      if (data) setData(data);
    };
    fetchData();
  }, [table, query]);

  return { data, error };
};

export default useSelect;
