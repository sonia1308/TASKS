import { create } from "zustand";

const useTodos = create((set) => ({
  todos: [],
  filteredTodos: [],
  setTodos: (data) => set({ todos: data, filteredTodos: data }),
  filterTodos: (query) =>
    set((state) => {
      const lowerCaseQuery = query.toLowerCase().trim();
      const filteredTodos = state.todos.filter((t) =>
        t.title.toLowerCase().includes(lowerCaseQuery)
      );

      return { filteredTodos };
    }),
}));

export default useTodos;
