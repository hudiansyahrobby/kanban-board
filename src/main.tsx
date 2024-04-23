import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { TodoProvider } from "@/contexts/TodoContext.tsx";
import { router } from "@/routes/index.tsx";

import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
      <Toaster position="top-center" richColors closeButton expand />
    </QueryClientProvider>
  </React.StrictMode>
);
