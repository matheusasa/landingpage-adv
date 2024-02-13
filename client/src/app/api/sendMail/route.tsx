// export const senMail = () => {
//   const express = require("express");
//   const nodemailder = require("nodemailer");

//   new Promise((resolve, reject) => {
//     smtp
//       .sendMail(emailconfig)
//       .then(() => {
//         smtp.close();
//         return resolve("");
//       })
//       .catch(() => {
//         console.log();
//         smtp.close();
//         return reject;
//       });
//   });
//   const app = express();
// };

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: {
  json: () =>
    | PromiseLike<{ email: any; numero: any; contato: any }>
    | { email: any; numero: any; contato: any };
}) {
  try {
    const { email, numero, contato } = await request.json();

    const smtp = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD_USER,
      },
    });
    const emailconfig = {
      from: process.env.EMAIL_USER,
      to: "matheusdaws@hotmail.com",
      subject: "isso e um teste",
      html: `<h3>Ola Matheus</h3>
    <li>titulo ${email}</li>
    <li>mensagem ${numero}</li>
    <li>contato${contato}</li>`,
    };

    await smtp.sendMail(emailconfig);

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
