import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState("");
 const [pass,setPass]=useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = () => {
    if (email) {
      setUser({ email });
      navigate("/");
    }
  };

  return (
    <div className="pg">
            <form className="pg1">

      <h2 >Login</h2>
      <input type="email" placeholder="Email" className="em" onChange={(e) => setEmail(e.target.value)} /><br></br>
      <input type="password" placeholder="password" className="pw" onChange={(e) => setPass(e.target.value)} /><br></br>
 <button className="log" onClick={handleLogin}>
        Login
      </button>
      </form>
    </div>
  );
};

export default Login;