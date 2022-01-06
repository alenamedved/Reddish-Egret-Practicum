import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotification] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message);
        setNotification(err.message);
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
    setUsername("");
    setPassword("");
    router.push("/");
  };
  return (
    <Layout>
      <div>
        <h1>Login Here</h1>
        {notify}
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Email"
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Password"
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};
export default Login;
