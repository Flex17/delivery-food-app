import { pathKeys } from "./config";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Layout from "../Layout/Layout";
import Menu from "../Menu/Menu";
import Registration from "../Authentication/Registration/Registration";
import Authorization from "../Authentication/Authorization/Authorization";
import Order from "../Order/Order";
import History from "../History/History";
import SuccessOrder from "../SuccessOrder/SuccessOrder";
import UnauthorizedLayout from "../UnauthorizedLayout/UnauthorizedLayout";

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
		</Routes>
	);
};

export default AppRouter;
