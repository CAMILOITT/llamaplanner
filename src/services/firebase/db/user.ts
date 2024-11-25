import { getAuth } from "firebase/auth"
import { doc, getFirestore, setDoc } from "firebase/firestore"

const db = getFirestore()

const auth = getAuth()

export async function saveUserData() {
  const user = auth.currentUser
  if (user) {
    const userRef = doc(db, "users", user.uid) // Referencia al documento del usuario
    await setDoc(
      userRef,
      {
        name: user.displayName,
        email: user.email,
        createdAt: new Date(),
      },
      { merge: true },
    )
  }
}
