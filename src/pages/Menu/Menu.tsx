import ProductList from "./ProductList/ProductList";
import InfoText from "../../ui/InfoText/InfoText";
import { useAppSelector } from "../../hooks/redux";
import { productsAPI } from "../../api/ProductsAPI";
import { useAuthToken } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";

const Menu = () => {
	const { t } = useTranslation();
	const {
		products,
		total
	} = useAppSelector(state => state.productsReducer);

	const auth = useAuthToken();

	productsAPI.useGetTotalQuery({ auth });

	if (!products) {
		return <InfoText>{t("menu.noProducts")}</InfoText>;
	}

	return (
		<main>
			<ProductList total={total} products={products}/>
		</main>
	);
};

export default Menu;
