import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actLogin } from "@store/auth/authSlice";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await dispatch(actLogin({ email, password }));
    if (actLogin.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">Welcome back</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading === "pending"}
          className="mt-2 bg-gray-900 text-white text-sm font-semibold py-3 rounded-full transition-colors hover:bg-gray-700 disabled:opacity-60"
        >
          {loading === "pending" ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-6 text-sm text-gray-500 text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-gray-900 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
