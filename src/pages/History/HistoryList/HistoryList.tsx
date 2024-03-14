import { HistoryOrderDataI } from "../../../api/OrdersAPI";
import HistoryCard from "../HistoryCard/HistoryCard";

interface HistoryListProps {
	data: HistoryOrderDataI[],
}

const HistoryList = ({ data }: HistoryListProps) => {

	return (
		<>
			{
				data?.map(order => {
					return (
						<HistoryCard key={order.id} data={order}/>
					);
				})
			}
		</>
	);
};

export default HistoryList;
