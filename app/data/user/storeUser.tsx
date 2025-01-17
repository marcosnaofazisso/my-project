import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserState {
    name: string | null
    email: string | null
    projects: string[]
    sections: Record<string, any[]>
    setUserData: (name: string | null, email: string | null) => void
    addProject: (projectName: string) => void
    isProjectAlreadyAdded: (projectName: string) => boolean
    clearUser: () => void
    addSectionToProject: (projectName: string, section: any) => void
}

export const useStoreUser = create(
    persist<UserState>(
        (set, get) => ({
            name: null,
            email: null,
            projects: [],
            sections: {},
            setUserData: (name: string | null, email: string | null) =>
                set({ name, email }),
            addProject: (projectName: string) =>
                set((state) => {
                    const newSections = { ...state.sections, [projectName]: [] };
                    return {
                        projects: [...state.projects, projectName],
                        sections: newSections,
                    };
                }),
            isProjectAlreadyAdded: (projectName: string) => {
                const state = get();
                return state.projects.includes(projectName);
            },
            clearUser: () =>
                set({ name: null, email: null, projects: [], sections: {} }),
            addSectionToProject: (projectName: string, section: any) => {
                set((state) => {
                    const existingSections = state.sections[projectName] || [];
                    const sectionExists = existingSections.some(
                        (existingSection) => existingSection.name === section.name
                    );

                    if (sectionExists) {
                        console.log("Section already exists, not adding.");
                        return state;
                    }

                    const updatedSections = {
                        ...state.sections,
                        [projectName]: [...existingSections, section],
                    };

                    return { sections: updatedSections };
                });
            },
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);