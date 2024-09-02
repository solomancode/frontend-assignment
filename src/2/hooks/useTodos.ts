import { useCallback, useEffect, useState } from "react";

const TODOS: Todo[] = [
  { id: "1", title: "Mark as completed", status: "done" },
  { id: "2", title: "Organize GitHub repositories", status: "pending" },
  { id: "3", title: "Update all software (again)", status: "pending" },
  { id: "4", title: "Refactor messy code from last year", status: "pending" },
  {
    id: "5",
    title: "Create a README file that actually helps",
    status: "pending",
  },
  { id: "6", title: "Set up automated backups (finally)", status: "pending" },
  {
    id: "7",
    title: "Fix that one bug that’s not really a bug",
    status: "pending",
  },
  {
    id: "8",
    title: "Clean up desktop icons (seriously, do it)",
    status: "pending",
  },
  { id: "9", title: "Learn a new programming language", status: "pending" },
  {
    id: "10",
    title: "Write tests for that code you wrote at 3 a.m.",
    status: "pending",
  },
  {
    id: "11",
    title: "Remove 'console.log' statements before release",
    status: "pending",
  },
];

interface Todo {
  id: string;
  title: string;
  status: "done" | "pending";
  deleted?: boolean;
}

interface Filter {
  title?: string;
  status?: string;
  deleted?: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [filtered, setFilteredTodos] = useState<Todo[]>(todos);
  const [filter, setFilter] = useState<Filter>({});

  useEffect(() => {
    const filtered = todos.filter((todo) => {
      if (todo.deleted) return false; // hide deleted
      let isTitleMatch = true;
      if (filter.title) {
        const isNotMatch =
          todo.title.toLowerCase().match(filter.title.toLowerCase()) === null;
        if (isNotMatch) {
          isTitleMatch = false;
        }
      }
      const isStatusMatch = filter.status
        ? todo.status === filter.status
        : true;
      return isTitleMatch && isStatusMatch;
    });
    setFilteredTodos(filtered);
  }, [filter, todos]);

  const reset = useCallback(() => {
    setTodos(TODOS);
  }, []);

  const setTodo = useCallback((todo: Todo) => {
    setTodos((todos) =>
      todos.map((_todo) => (todo.id === _todo.id ? todo : _todo)),
    );
  }, []);

  return { todos: filtered, filter: setFilter, reset, setTodo };
};
