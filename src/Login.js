import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-4xl mb-6 text-yellow-400">Login to Continue</h1>

      <input
        type="email"
        placeholder="Enter Email"
        className="p-3 mb-3 rounded bg-gray-800 text-white"
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="p-3 mb-3 rounded bg-gray-800 text-white"
      />

      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg mt-4"
      >
        Login
      </button>
    </div>
  );
}
