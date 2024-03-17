import { ordersAPI } from "../../api/OrdersAPI";
import Title from "../../ui/Title/Title";
import css from "./history.module.scss";
import HistoryList from "./HistoryList/HistoryList";
import Loader from "../../ui/Loader/Loader";
import InfoText from "../../ui/InfoText/InfoText";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/redux";

const History = () => {
	const { t } = useTranslation();

	const localId = useAppSelector(state => state.authReducer.localId);

	const {
		data: orders,
		isLoading,
	} = ordersAPI.useGetAllQuery({ localId });

	if (isLoading) {
		return <Loader/>;
	}

	if (!orders?.length) {
		return <InfoText>{t("history.noOrders")}</InfoText>;
	}

	return (
		<div className={css.wrapper}>
			<Title>{t("history.title")}</Title>
			<HistoryList orders={orders}/>
		</div>
	);
};

export default History;
