import { Strategy } from "@/feature/createStrategy/types"
import { getAuth } from "firebase/auth"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore"

export async function saveStrategy(
  strategyData: Omit<Strategy, "id">,
  projectId: string,
) {
  if (!projectId) return
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser
  if (!user) return

  const strategiesRef = collection(
    db,
    "users",
    user?.uid,
    "projects",
    projectId,
    "strategies",
  )
  addDoc(strategiesRef, strategyData)
  console.log("Estrategia guardada para el proyecto")
}

export async function eliminateStrategy(strategyId: string, projectId: string) {
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser
  if (!user) return

  const strategiesRef = collection(
    db,
    "users",
    user?.uid,
    "projects",
    projectId,
    "strategies",
  )
  await deleteDoc(doc(strategiesRef, strategyId))
}

export async function getAllStrategies(projectId: string) {
  if (!projectId) return []
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser
  if (!user) return []

  const strategiesRef = collection(
    db,
    "users",
    user?.uid,
    "projects",
    projectId,
    "strategies",
  )
  const strategiesSnapshot = await getDocs(strategiesRef)
  const strategies = strategiesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Strategy[]
  console.log(strategies)

  return strategies
}

export async function getStrategy(strategyId: string, projectId: string) {
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser
  if (!user) return
  const strategiesRef = collection(
    db,
    "users",
    user?.uid,
    "projects",
    projectId,
    "strategies",
  )
  const strategiesSnapshot = await getDocs(strategiesRef)
  const strategies = strategiesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Strategy[]
  return strategies.find(strategy => strategy.id === strategyId)
}
