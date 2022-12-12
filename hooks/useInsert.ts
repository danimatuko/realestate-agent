import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import supabase from '../supabase/config';

const useInsert = (table: string) => {
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  const insertData = async (input: object) => {
    const { data, error } = await supabase.from(table).insert([{ ...input }]);
    if (error) {
      setError(error);
      console.error(error);
    }
    if (data) setData(data);
  };

  return { data, error, insertData };
};

export default useInsert;
