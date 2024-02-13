"use client";
import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [contato, setContato] = useState("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        numero,
        contato,
      }),
    });
    console.log(await response.json());
  };
  return (
    <div className="flex justify-center h-full py-5 items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white h-[500px] w-[40%] py-3 rounded-lg flex flex-col justify-center items-center"
      >
        <div className=" pt-3 flex flex-col justify-start items-start">
          <label htmlFor="" className="font-bold text-2xl text-black">
            Email
          </label>
          <br />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="h-10 px-3 bg-slate-100"
          />
          <br />
          <label className="font-bold text-black text-2xl" htmlFor="">
            Seu numero
          </label>
          <br />
          <input
            type="number"
            value={numero}
            onChange={(e) => {
              setNumero(e.target.value);
            }}
            className="h-10  px-3 bg-slate-100"
          />
          <br />
          <label htmlFor="" className="font-bold text-2xl text-black">
            Motivo do contato
          </label>
          <br />
          <textarea
            rows={4}
            cols={50}
            className="rounded-lg resize-none px-3 bg-slate-100"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          ></textarea>
          <br />
        </div>
        <div className="flex text-black justify-center items-center py-4">
          <button type="submit" className="font-bold text-xl">
            {" "}
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
