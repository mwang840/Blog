import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: SendMailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message received from ${name} (${email})`,
    text: message,
  };

  const sendMail = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (error) {
        if (!error) {
          resolve(
            "Email sent! Thank you for sending out the message, we will get back to you soon!"
          );
        } else {
          reject(error.message);
        }
      });
    });

  try {
    await sendMail();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
