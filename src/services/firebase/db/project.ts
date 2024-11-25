import { Project } from "@/feature/createProject/types"
import { getAuth } from "firebase/auth"
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore"

export async function saveUserProject(projectData: Project) {
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser

  if (user) {
    const projectsRef = collection(db, "users", user.uid, "projects") // Subcolección
    await addDoc(projectsRef, projectData)
  }
}

export type RequiredProject = Required<Pick<Project, "id">> &
  Partial<Omit<Project, "id">>

export async function updateProject(projectData: RequiredProject) {
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser
  if (user) {
    const projectsRef = collection(db, "users", user.uid, "projects") // Subcolección
    if (projectData.id) {
      updateDoc(doc(projectsRef, projectData.id), projectData)
    }
  }
}

export async function getProjects() {
  const db = getFirestore()
  const auth = getAuth()
  const user = auth.currentUser
  if (user) {
    const projectsRef = collection(db, "users", user.uid, "projects")
    const projectsSnapshot = await getDocs(projectsRef)
    const projects = projectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Required<Project>[]
    return projects
  }
  return []
}
