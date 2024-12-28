"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";
import { FC } from "react";
export type emailFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<emailFormData>();

  function onSubmit(information: emailFormData) {
    sendEmail(information);
  }

  return (
    <div className="border border-red-800 p-3 rounded-md shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="first name"
            className="mb-3 block text-base font-medium text-black"
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("firstName", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="last name"
            className="mb-3 block text-base font-medium text-black"
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("lastName", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="Message"
            className="mb-3 block text-base font-medium text-black"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
