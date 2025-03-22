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
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().optional(),
});
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: SignupData) => console.log(data);
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-evenly  max-w-screen-2xl">
      <div className="bg-gradient-to-r from-[#DCFFEB] to-[#FFF3E4] w-1/2 flex justify-center items-center h-screen p-10">
        <div className="transparent  border-gray w-fulltransparent flex items-center justify-center rounded-md mx-auto border border-gray sm:flex-col flex-row p-7">
          <h1 className="text-2xl font-bold mb-2">
            Join the Future of Healthcare{" "}
            <span className="text-[#D1992F] ">Innovation!</span> 🌍
          </h1>
          <h2 className="text-xl font-semibold mb-3">
            Turn bold ideas into real-world impact.
          </h2>
          <p className="text-justify">
            Sign up today and gain access to expert insights, essential tools,
            and a thriving community of healthcare changemakers!
          </p>
        </div>
      </div>
      <Card className="mt-8 w-full sm:w-1/2">
        <CardHeader className="text-left font-bold">Hey, Hello 👋</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className=" mb-2 mx-auto">
            <div className="mb-2">
              <Label htmlFor="fullName" className="mb-1 font-bold">
                Full name
              </Label>
              <Input {...register("fullName")} />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div className="mb-2">
              <Label htmlFor="email" className="mb-1 font-bold">
                Email address
              </Label>
              <Input {...register("email")} />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-2">
              <Label htmlFor="password" className="mb-1 font-bold">
                Create a password
              </Label>
              <Input type="password" {...register("password")} />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-2">
              <Label htmlFor="companyName" className="mb-1 font-bold">
                Company Name (Optional)
              </Label>
              <Input {...register("companyName")} />
            </div>
            <div className="items-top flex space-x-2 mb-2">
              <Checkbox id="t&c" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="t&c"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  By signing up, you agree to our [Terms & Conditions] and
                  [Privacy Policy].
                </label>
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <Button
                type="submit"
                className="w-full max-w-xs bg-gradient-to-r from-[#FFD76D] to-[#9AD3B2] text-white font-medium py-2 rounded-lg shadow-md hover:opacity-90 transition my-3"
              >
                Sign Up
              </Button>
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
              Have an account?{" "}
              <Link
                href="/log-in"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
          {/* </div> */}
        </CardContent>
      </Card>
    </section>
  );
}
