import ProductList from "./ProductList/ProductList";
import InfoText from "../../ui/InfoText/InfoText";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { productsAPI } from "../../api/ProductsAPI";
import { useAuthToken } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useMergeArrays } from "../../hooks/useMergeArrays";
import useDynamicPagination from "../../hooks/useDynamicPagination";
import { useHandleProduct } from "../../hooks/products/useHandleProduct";
import { productsSlice } from "../../redux/reducers/ProductsSlice";

const Menu = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const {
		products,
		total,
		startAt,
		endAt,
	} = useAppSelector(state => state.productsReducer);
	const orderProducts = useAppSelector(state => state.orderReducer.products);

	const preparedProducts = useMergeArrays(orderProducts, products);
	const auth = useAuthToken();

	const [loadProducts] = productsAPI.useGetAllMutation();
	productsAPI.useGetTotalQuery({ auth });

	const increaseStartAt = () => dispatch(productsSlice.actions.increaseStartAt(8));
	const increaseEndAt = () => dispatch(productsSlice.actions.increaseEndAt(8));

	const onLoadProducts = () => {
		return loadProducts({
			auth,
			startAt,
			endAt
		});
	};

	useDynamicPagination(products, total, onLoadProducts, increaseStartAt, increaseEndAt);

	const {
		addProduct,
		removeProduct
	} = useHandleProduct();

	if (!products) {
		return <InfoText>{t("menu.noProducts")}</InfoText>;
	}

	return (
		<>
			<ProductList products={preparedProducts} removeProduct={removeProduct} addProduct={addProduct}/>
		</>
	);
};

export default Menu;
