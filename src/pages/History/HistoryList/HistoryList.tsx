import HistoryCard from "../HistoryCard/HistoryCard";
import { IHistoryOrderData } from "@api/types";

interface HistoryListProps {
	orders: IHistoryOrderData[],
}

const HistoryList = ({ orders }: HistoryListProps) => {

	return (
		<>
			{
				orders.map(order => {
					return (
						<HistoryCard key={order.id} order={order}/>
					);
				})
			}
		</>
	);
};

export default HistoryList;
