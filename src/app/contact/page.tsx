"use client";
import Contact from "../components/contact";
export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-1">
      <h1 className="font-serif text-5xl pb-2 antialiased">Contact Me!</h1>
      <Contact />
    </main>
  );
}
