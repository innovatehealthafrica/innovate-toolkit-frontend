"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { useState } from "react";
type SignupData = z.infer<typeof signupSchema>;

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: SignupData) => console.log(data);
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-evenly  max-w-screen-2xl">
      <div className="bg-gradient-to-r from-[#DCFFEB] to-[#FFF3E4] w-1/2 flex justify-center items-center h-screen p-10">
        <div className="transparent text-justify border-gray w-fulltransparent flex items-center justify-center rounded-md mx-auto border border-gray sm:flex-col flex-row p-7">
          <h1 className="text-2xl font-bold mb-2">
            Welcome Back <span className="text-[#D1992F] ">Innovation!</span>
          </h1>
          <h2 className="text-xl font-semibold mb-3">
            Your journey to transforming healthcare starts here.{" "}
          </h2>
          <p className="text-justify">
            Log in to access tools, resources, and a vibrant community ready to
            support your innovation
          </p>
        </div>
      </div>
      <Card className="mt-8 w-full sm:w-1/2 my-auto">
        <CardHeader className="text-left font-bold">Hey, Hello 👋</CardHeader>
        <p className="pl-5">Enter the information you entered while registering</p>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className=" mb-2 mx-auto">
            <div className="mb-2">
              <div className="mb-2">
                <Label htmlFor="email" className="mb-1 font-bold">
                  Email
                </Label>
                <Input {...register("email")} />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-2">
                <Label htmlFor="password" className="mb-1 font-bold">
                  Password
                </Label>
                <Input type="password" {...register("password")} />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className=" flex space-x-2 mb-2">
                  <Checkbox id="Remember" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="Remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76D] to-[#9AD3B2]">
                  <p className="text-sm text-right bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76D] to-[#9AD3B2]">
                    New user?{" "}
                    <Link
                      href="/forgot-password"
                      className="text-right font-medium hover:underline"
                    >
                      forgot password?
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <Button
                  type="submit"
                  className="w-full max-w-xs bg-gradient-to-r from-[#FFD76D] to-[#9AD3B2] text-white font-medium py-2 rounded-lg shadow-md hover:opacity-90 transition my-3"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
          {/* <div className="flex flex-col items-center w-full"> */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="text-sm text-gray-600">
              New user?{" "}
              <Link
                href="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
          {/* </div> */}
        </CardContent>
      </Card>
    </section>
  );
}
