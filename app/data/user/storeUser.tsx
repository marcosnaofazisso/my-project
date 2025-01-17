import { create } from 'zustand';

interface UserState {
    name: string | null
    email: string | null
    projects: string[]
    setUserData: (name: string | null, email: string | null) => void
    addProject: (projectName: string) => void
    isProjectAlreadyAdded: (projectName: string) => boolean
}

export const useStoreUser = create<UserState>((set, get) => ({
    name: null,
    email: null,
    projects: [],
    setUserData: (name: string | null, email: string | null) =>
        set({ name, email }),
    addProject: (projectName: string) =>
        set((state) => ({ ...state, projects: [...state.projects, projectName] })),
    isProjectAlreadyAdded: (projectName: string) => {
        const state = get()
        return state.projects.some((project) => project === projectName)
    },
}))