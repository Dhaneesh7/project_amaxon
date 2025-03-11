
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './sign.css'
const Signup = ({ setUser }) => {
const [name,setName]=useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      // setUser({ email });
      navigate("/login");
    } else {
      alert("Please enter valid details!");
    }
  };

  return (
    <div className="sign">
      <form className="form1 " onSubmit={handleSignup}>
        <h2 >Signup</h2>
        <input
          className="iname"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="imail"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="ipass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bsign">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
