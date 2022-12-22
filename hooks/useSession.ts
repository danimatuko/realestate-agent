import { useEffect, useState } from 'react';
import supabase from '../supabase/config';

const useSession = () => {
  const [session, setSession] = useState<object | null>(null);
  const [user, setUser] = useState<(object & { id: string }) | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data) {
        setSession(data.session);
        setUser(data.session?.user!);
      }
      if (error) {
        setError(error.message);
        console.log(error);
      }
    };

    isAuth();
  }, []);

  return {
    session,
    user,
    error,
  };
};

export default useSession;
