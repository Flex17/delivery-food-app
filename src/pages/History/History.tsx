import { HistoryOrderDataI, ordersAPI } from "../../api/OrdersAPI";
import { useAppSelector } from "../../hooks/redux";
import Title from "../../ui/Title/Title";
import css from "./history.module.scss";
import HistoryList from "./HistoryList/HistoryList";
import Loader from "../../ui/Loader/Loader";
import InfoText from "../../ui/InfoText/InfoText";

const History = () => {
	const token = localStorage.getItem("access_token");
	const localId = useAppSelector(state => state.authReducer.localId);

	const {
		data,
		isLoading
	} = ordersAPI.useGetAllQuery({
		auth: token || "",
		localId
	});

	if (isLoading) {
		return <Loader/>;
	}

	if (!data) {
		return <InfoText>Заказов не найдено...</InfoText>;
	}

	const preparedData: HistoryOrderDataI[] = Object.entries(data)
		.map(([id, item]) => ({
			id,
			...item
		}));

	return (
		<div className={css.wrapper}>
			<Title>Ваши заказы</Title>
			<HistoryList data={preparedData}/>
		</div>
	);
};

export default History;
