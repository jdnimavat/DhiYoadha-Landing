
import React from "react";
import { Navigate } from "react-router-dom";

// Homepage
import Home from "../pages/Home";

// After Authentication
const authProtectedRoutes = [
];

const publicRoutes = [
	// Authentication Page
	{ path: "/", component: <Home /> },
	{ path: "/home", component: <Home /> },
];

export { authProtectedRoutes, publicRoutes };
