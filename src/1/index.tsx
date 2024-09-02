// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <form className="login-form" onSubmit={onSubmit}>
        <label>Email</label>
        <input
          className="input"
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
        <label>Password</label>
        <input
          name="password"
          className="input"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Task1;
