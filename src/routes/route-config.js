
import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Login from "../pages/Login"



const routeConfig = {
    routes: [
        {
            component: Home,
            path: "/",
            exact: "true",

        },
        {
            component: Signin,
            path: "/signin",
            exact: "true",

        },
        {
            component: Login,
            path: "/login",
            exact: "true",

        },
    ]
}

export default routeConfig