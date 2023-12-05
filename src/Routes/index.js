import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
// import NonAuthLayout from "../Layouts/NonAuthLayout";
import Layout from "../Layouts";

//routes
import { publicRoutes } from "./allRoutes";

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    {route.component}
                                </Layout>
                            }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default Index;