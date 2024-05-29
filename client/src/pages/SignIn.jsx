import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page from refreshing when submit
    try{
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false){
        setError(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        ></input>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-[1%] mt-5">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error && "Something went wrong!"}
      </p>
    </div>
  );
}