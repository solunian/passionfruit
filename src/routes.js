import React from "react";

import { Home, About } from "./generalUI";
import Bubble from "./bubble";
import Explore from "./explore";


const routes = {
    "/": () => <Home />,
    "/explore": () => <Explore />,
    "/bubble": () => <Bubble />,
    "/about": () => <About />,
};

export default routes;