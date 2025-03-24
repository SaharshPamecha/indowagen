'use client';

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

// Define props interface
interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  // console.log("Providers component rendered");
  return (
    <>
    <div>h</div>
      <ProgressBar
        height="4px"
        color="black"
        
       // options={{ showSpinner: false }}
        //shallowRouting
      />
      {children}
    </>
  );
};

export default Providers;