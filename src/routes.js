import React from "react";

import { Home, About } from "./generalUI";
import Explore from "./explore";


const routes = {
    "/": () => <Home />,
    "/explore": () => <Explore />,
    "/about": () => <About />,
};

export default routes;