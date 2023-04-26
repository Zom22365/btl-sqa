import { useRoutes } from "react-router-dom";
import Dashboard from "../page/private/Dashboard";
import ViewAllUsers from "../page/private/ViewAllUsers";
import NotDoneUser from "../page/private/NotDoneUser";
import DoneUser from "../page/private/DoneUser";
import Static from "../page/private/Static";
import Config from "../page/private/Config";
import Login from "../page/Login";
import { useState } from "react";
import Detail from "../page/private/Detail";
const Router = () => {

    const isLogin = localStorage.getItem("username") || ""

    let routes = []
    if (isLogin !== "") {
        routes =
            [
                {
                    path: "/",
                    element: <Dashboard />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                { path: "/register" },
                { path: "/forgot-password" },
                {
                    path: "/home"
                },
                {
                    path: "/auth/dashboard",
                    element: <Dashboard />
                },
                {
                    path: "/auth/all/taxer",
                    element: <ViewAllUsers />
                }, {
                    path: "/auth/all/taxer/:id",
                    element: <Detail />
                },
                {
                    path: "/auth/notdone/taxer",
                    element: <NotDoneUser />
                },
                {
                    path: "/auth/done/taxer",
                    element: <DoneUser />
                },
                {
                    path: "/auth/update/config",
                    element: <Static />
                },
                {
                    path: "/auth/view/config",
                    element: <Config />
                }

            ]

            ;
    } else {
        routes =
            [

                {
                    path: "/*",
                    element: <Login />
                },
                {
                    path: "/login",
                    element: <Login />
                },
            ]

    }
    return useRoutes(routes);





}

export default Router;