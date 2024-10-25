import React from "react";
import { Card } from "./components/Card/Card";

export function ForgotPasswordScreen() {
  return (
    <div className="flex items-center justify-center h-screen relative ">
      <div className="flex flex-col items-center justify-center w-2/4 relative z-10 p-4 ">
        <Card email="" />
      </div>
      <div className="bg-primary w-full h-1/2 absolute bottom-0"></div>
    </div>
  );
}
