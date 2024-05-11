import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Router } from "react-router-dom";

import App from "./App";
import MovieDetails from "./components/MovieDetails";

const router = createBrowserRouter(
    [
        {
            path : "/",
            element : <App/>
        }
        ,
        {
            path : "/movie/privet",
            element : <MovieDetails/>
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={ router }/>
    </React.StrictMode>
)