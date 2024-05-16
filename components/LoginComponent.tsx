"use client"
import { FormEvent } from "react";
import { useState } from "react";

export default function LoginComponent() {
  const [senha, setSenha] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(senha)
    fetch("http://localhost:8000/auth/obtain_token_cookie",
      {
        method: "POST",
        body: JSON.stringify({
          senha
        }),
        credentials: "include"
      })
      .then(res => {
        if (res.ok) {
          window.location.reload();
        }
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="passw">Senha</label>
        <input type="password" onChange={e => setSenha(e.target.value)} id="passw" />
      </form>
    </div>
  )
}
