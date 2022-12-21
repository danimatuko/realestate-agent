import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/shared/Layout';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import {
  SessionContextProvider,
  Session,
  useUser,
} from '@supabase/auth-helpers-react';
import { useState } from 'react';
import supabase from '../supabase/config';

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  // const user = useUser();
  (async (params: type) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);
  })();

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}>
      <Layout>
        <Component {...pageProps} />
      </Layout>{' '}
    </SessionContextProvider>
  );
}
