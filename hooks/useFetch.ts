import React from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import supabase from '../supabase/config';

const useFetch = (table: string) => {
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase.from(table).select();
      if (error) {
        setError(error);
        console.error(error);
      }
      if (data) setData(data);
    };
    fetchData();
  }, [table]);

  return { data, error };
};
