import Header from "../Commons/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;