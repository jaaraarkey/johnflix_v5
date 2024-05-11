import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Router } from "react-router-dom";
import DiscoverMovies from "./src/components/DiscoverMovies";

import App from "./src/App";
import MovieDetails from "./src/components/MovieDetails";

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