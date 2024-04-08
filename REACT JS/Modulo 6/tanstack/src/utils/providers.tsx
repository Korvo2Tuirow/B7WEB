"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props={
    children: ReactNode;
}

//npm i @tanstack/react-query

export const Providers = ({children}:Props)=>{
    const queryClient = new QueryClient();
    
    return(

        <QueryClientProvider client = {queryClient}>
            {children}
        </QueryClientProvider>


    )
}