import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (id.trim() === "" || password.trim() === "") {
      setError("아이디와 비밀번호를 입력해 주세요."); 
      return;
    }
  setError("");
  localStorage.setItem("isLoggedIn", "true");
  navigate("/todos");
  };

  
  
  return (
    <div className="login-container">
      <h2>로그인</h2>
      {error && <p className="login-error">{error}</p>}
      <input 
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
    );
}
export default LoginPage;
