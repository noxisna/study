import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const hanldeLogin = () => {
    navigate('/todos');
  };
  
  return (
    <div>
      <h2>로그인</h2>
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
      <button onClick={hanldeLogin}>로그인</button>
    </div>
    );
}
export default LoginPage;
