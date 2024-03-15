import { Outlet } from "react-router-dom";
import Navbar from "../../ui/Navbar/Navbar";
import LanguageSelector from "../../ui/LanguageSelector/LanguageSelector";

const Layout = () => {

	return (
		<>
			<Navbar/>
			<main className="wrapper">
				<LanguageSelector/>
				<Outlet/>
			</main>
		</>
	);
};

export default Layout;
