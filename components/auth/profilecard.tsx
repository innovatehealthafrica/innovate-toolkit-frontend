import Image from "next/image";
import React from "react";
import { User, Settings, LogOut, Smartphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ProfileCard() {
  return (
    <div className="w-1/3 h-1/2 bg-white cursor-pointer px-3">
      <div className="flex gap-2 p-3 shadow-md border-2">
        <Image
          src="/profile.jpg"
          alt="User"
          width={200}
          height={200}
          className="w-8 h-8 rounded-full"
        />
        <span className="font-semibold hidden sm:block">Jason Ronald</span>
        <div className="flex gap-3">
          <User />
          <p className="font-semibold">
            my profile <span>@ Jason Ronald</span>
          </p>
        </div>
      </div>
      <div className="shadow-sm">
        <div className="flex gap-3">
          <Settings />
          <p>Account settings</p>
        </div>
        <div className="flex gap-3">
          <Smartphone />
          <p>Device management</p>
        </div>
        <div className="flex gap-3">
          <LogOut />
          <p>Sign out</p>
        </div>
      </div>
      <Separator />
      <div className="flex gap-3 border-2 p-3">
        <LogOut />
        <p>Sign out of all accounts</p>
      </div>
    </div>
  );
}
