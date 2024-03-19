import { useTranslation } from "react-i18next";
import ProductList from "./ProductList/ProductList";
import { cartAPI } from "@api/CartAPI";
import { productsAPI } from "@api/ProductsAPI";
import { productsSlice } from "@redux/reducers/ProductsSlice";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import useDynamicPagination from "@hooks/useDynamicPagination";
import { useMergeArrays } from "@hooks/useMergeArrays";
import InfoText from "@ui/InfoText/InfoText";

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
