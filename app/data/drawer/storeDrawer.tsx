import { create } from 'zustand';

interface DrawerState {
    isDrawerOpen: boolean,
    toggleDrawer: VoidFunction,
}

export const useDrawerStore = create<DrawerState>((set) => ({
    isDrawerOpen: true,
    toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}))
