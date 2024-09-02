import * as React from "react";
import { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Input from "../2/components/Input";
import List from "../2/components/List";
import { useSearch } from "../2/hooks/useSearch";
import { useTodos } from "../2/hooks/useTodos";

// Style
import "./index.scss";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  const { search, setSearch, params } = useSearch();
  const { todos, filter, setTodo } = useTodos();

  const list = useMemo(() => {
    return todos.map((todo) => {
      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = { ...todo };
        next.status = e.target.checked ? "done" : "pending";
        setTodo(next);
      };

      const deleteTodo = () => {
        setTodo({ ...todo, deleted: true });
      };

      return (
        <label className="todo">
          <input
            type="checkbox"
            onChange={onChange}
            checked={todo.status === "done"}
          />
          <pre className={"title " + todo.status}>{todo.title}</pre>
          <button onClick={deleteTodo} className="btn delete" type="button">
            ×
          </button>
        </label>
      );
    });
  }, [todos, setTodo]);

  useEffect(() => {
    if (search.length) {
      filter({ title: search });
    } else {
      filter((pre) => {
        return { ...pre, title: "" };
      });
    }
  }, [search, filter]);

  const status = useMemo(() => {
    return params.get("status");
  }, [params]);

  useEffect(() => {
    if (!status) {
      filter((pre) => {
        const next = { ...pre };
        delete next.status;
        return next;
      });
    } else {
      filter((pre) => ({ ...pre, status }));
    }
  }, [status, filter]);

  return (
    <div id="task-3">
      <form className="form">
        <Input
          placholder="Enter Todo Title"
          value={search}
          onChange={setSearch}
        />
        <nav className="status">
          status:
          <NavLink
            className={"query " + (!status ? "active-status" : "")}
            to="/task/3"
          >
            All
          </NavLink>
          <NavLink
            className={"query " + (status === "pending" ? "active-status" : "")}
            to="/task/3?status=pending"
          >
            Pending
          </NavLink>
          <NavLink
            className={"query " + (status === "done" ? "active-status" : "")}
            to="/task/3?status=done"
          >
            Completed
          </NavLink>
        </nav>
      </form>
      <List list={list} />
    </div>
  );
};

export default Task3;
