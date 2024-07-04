"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryclient = new QueryClient();

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
}

export default DefaultLayout;
