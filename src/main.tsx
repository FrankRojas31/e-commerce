import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.tsx";

createRoot (document.getElementById ('root')!).render (
    <StrictMode>
        <RouterProvider router={router} />
        <PrimeReactProvider>
            <App/>
        </PrimeReactProvider>
    </StrictMode>,
)
