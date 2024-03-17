import ProductList from "./ProductList/ProductList";
import InfoText from "../../ui/InfoText/InfoText";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { productsAPI } from "../../api/ProductsAPI";
import { useTranslation } from "react-i18next";
import useDynamicPagination from "../../hooks/useDynamicPagination";
import { productsSlice } from "../../redux/reducers/ProductsSlice";
import { cartAPI } from "../../api/CartAPI";
import { useMergeArrays } from "../../hooks/useMergeArrays";

const Menu = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const localId = useAppSelector(state => state.authReducer.localId);

	const {
		products,
		total,
		startAt,
		endAt,
	} = useAppSelector(state => state.productsReducer);

	const { data: orderProducts } = cartAPI.useGetCartQuery({ localId });
	productsAPI.useGetTotalQuery();
	const [loadProducts] = productsAPI.useLazyGetAllQuery();

	const preparedProducts = useMergeArrays(orderProducts || [], products);

	const increaseStartAt = () => dispatch(productsSlice.actions.increaseStartAt(8));
	const increaseEndAt = () => dispatch(productsSlice.actions.increaseEndAt(8));

	const onLoadProducts = () => {
		return loadProducts({
			startAt,
			endAt
		});
	};

	useDynamicPagination(products, total, onLoadProducts, increaseStartAt, increaseEndAt);

	if (!products) {
		return <InfoText>{t("menu.noProducts")}</InfoText>;
	}

	return (
		<ProductList
			products={preparedProducts}
		/>
	);
};

export default Menu;
