import { Outlet } from "react-router-dom";
import Navbar from "../../ui/Navbar/Navbar";

const Layout = () => {

	return (
		<>
			<Navbar/>
			<main className="wrapper">
				<Outlet/>
			</main>
		</>
	);
};

export default Layout;
