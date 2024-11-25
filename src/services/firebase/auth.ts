import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "./config"

export async function signInWithGoogle() {
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log("Usuario autenticado:", user)
  } catch (error) {
    console.error("Error en la autenticación:", error)
  }
}
