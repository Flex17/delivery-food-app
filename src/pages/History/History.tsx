import { HistoryOrderDataI, ordersAPI } from "../../api/OrdersAPI";
import { useAppSelector } from "../../hooks/redux";
import Title from "../../ui/Title/Title";
import css from "./history.module.scss";
import HistoryList from "./HistoryList/HistoryList";
import Loader from "../../ui/Loader/Loader";
import InfoText from "../../ui/InfoText/InfoText";
import { useAuthToken } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";

const History = () => {
	const { t } = useTranslation();
	const localId = useAppSelector(state => state.authReducer.localId);

	const auth = useAuthToken();

	const {
		data,
		isLoading
	} = ordersAPI.useGetAllQuery({
		auth,
		localId
	});

	if (isLoading) {
		return <Loader/>;
	}

	if (!data) {
		return <InfoText>{t("history.noOrders")}</InfoText>;
	}

	const preparedData: HistoryOrderDataI[] = Object.entries(data)
		.map(([id, item]) => ({
			id,
			...item
		}));

	return (
		<div className={css.wrapper}>
			<Title>{t("history.title")}</Title>
			<HistoryList data={preparedData}/>
		</div>
	);
};

export default History;
