import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-react';
import supabase from '../supabase/config';

const Login = () => {
  return (
    <div className='container mx-auto max-w-sm py-40'>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};
export default Login;
