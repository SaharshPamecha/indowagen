'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from "react";

// Dynamically import the progress bar to avoid SSR issues
const ProgressBar = dynamic(
  () => import("next-nprogress-bar").then((mod) => mod.AppProgressBar),
  { ssr: false }
);

// Define props interface
interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  // console.log("Providers component rendered");
  return (
    <>
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