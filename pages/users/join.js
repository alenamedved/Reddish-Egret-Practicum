import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Register = () => {
  const router = useRouter();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [notification, setNotification] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== passConf) {
      setNotification("Password and password confirmation does not   match");
      setTimeout(() => {
        setNotification("");
      }, 2000);
      setPassword("");
      setPassConf("");
      return null;
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message);
      });
    router.push("/");
  };
  return (
    <Layout>
      <div>
        <h1>Join our community</h1>
        {notification}
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="text"
            value={userName}
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Email"
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Password"
          />
          <br />
          <label>Password conf:</label>
          <input
            type="password"
            value={passConf}
            onChange={({ target }) => setPassConf(target.value)}
            placeholder="Confirm password"
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </Layout>
  );
};
export default Register;
