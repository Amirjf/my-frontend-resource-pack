import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  toggle: () => void;
}

interface FilterStore {
  isOpen: boolean;
  filters: any; // Replace 'any' with the specific type for your filters data
  toggle: () => void;
  setFilters: (filters: any) => void; // Adjust the type based on your filters' structure
}
export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: true,

  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useFilters = create<FilterStore>((set) => ({
  isOpen: false,
  filters: null, // Initial filters state
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setFilters: (filters) => set({ filters }), // Method to update filters state
}));
