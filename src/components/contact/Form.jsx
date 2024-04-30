"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have recevied your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
          console.log("FAILED...", error.text);
        }
      );
  };
  const onSubmit = (data) => {
    const temlpateParams = {
      to_name: "Ali Sabet",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(temlpateParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This flied is required!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: "This flied is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <textarea
          placeholder="message"
          {...register("message", {
            required: "This flied is required!",
            maxLength: {
              value: 500,
              message: "Name should be less than 500 characters long.",
            },
            minLength: {
              value: 50,
              message: "Name should be more than 50 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <input
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
};
export default Form;
