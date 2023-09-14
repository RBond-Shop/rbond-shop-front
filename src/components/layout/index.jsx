import React from "react";
import { Header } from "../Header";

export const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mt-0 mb-0 mr-auto ml-auto pt-0 pb-0 pr-4 pl-4">{children}</div>
    </div>
  );
};
