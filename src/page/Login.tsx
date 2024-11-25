import { signInWithGoogle } from '@/services/firebase/auth';
import { saveUserData } from '@/services/firebase/db/user';
import { useNavigate } from 'react-router';

interface PropLogin {}

export default function Login({}: PropLogin) {
  const navigator = useNavigate();

  async function login() {
    try {
      await signInWithGoogle();
      await saveUserData();
      navigator('/');
    } catch (e) {
      const error = (e as Error).message;
      alert(error);
    }
  }

  return (
    <main>
      <div className="flex flex-col gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-300 p-9 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Iniciar sesión</h2>
        <p className="">Por favor ingrese sus credenciales</p>
        <div className="flex justify-center ">
          <button onClick={login} className="btn btn-primary">
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </main>
  );
}
