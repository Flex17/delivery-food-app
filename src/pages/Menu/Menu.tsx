import { productsAPI } from "../../api/ProductsAPI";
import ProductList from "./ProductList/ProductList";
import Loader from "../../ui/Loader/Loader";
import InfoText from "../../ui/InfoText/InfoText";

const Menu = () => {
	const token = localStorage.getItem("access_token");

	const {
		data: products,
		isLoading
	} = productsAPI.useGetAllQuery({ auth: token || "" });

	if (isLoading) {
		return <Loader/>;
	}

	if (!products) {
		return <InfoText>Продуктов нет...</InfoText>;
	}

	return (
		<main>
			<ProductList products={products.data}/>
		</main>
	);
};

export default Menu;
