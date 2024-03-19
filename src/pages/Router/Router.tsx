import { pathKeys } from "./config";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Layout from "@pages//Layout/Layout";
import Menu from "@pages/Menu/Menu";
import Registration from "@pages/Authentication/Registration/Registration";
import Order from "@pages/Order/Order";
import NotFound from "@pages/404/NotFound";
import UnauthorizedLayout from "@pages/UnauthorizedLayout/UnauthorizedLayout";
import SuccessOrder from "@pages/SuccessOrder/SuccessOrder";
import Authorization from "@pages/Authentication/Authorization/Authorization";
import History from "@pages/History/History";

const AppRouter = () => {

	const {
		root,
		registration,
		order,
		authorization,
		history,
		successOrderPage,
	} = pathKeys;

	return (
		<Routes>
			<Route path={root} element={<RequireAuth/>}>
				<Route element={<Layout/>}>
					<Route index element={<Menu/>}/>
					<Route path={order()} element={<Order/>}/>
					<Route path={history()} element={<History/>}/>
					<Route path={successOrderPage()} element={<SuccessOrder/>}/>
				</Route>
			</Route>
			<Route element={<UnauthorizedLayout/>}>
				<Route path={registration()} element={<Registration/>}/>
				<Route path={authorization()} element={<Authorization/>}/>
			</Route>
			<Route path="*" element={<NotFound/>}/>
		</Routes>
	);
};

export default AppRouter;
