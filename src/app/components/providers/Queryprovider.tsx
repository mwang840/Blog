"use client";
import React, { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

/**
 * Wraps the QueryClientProvider with it's children
 */
export const QueryProvider = ({
    children,
}: React.PropsWithChildren): JSX.Element => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);