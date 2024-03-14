import InfoText from "../../ui/InfoText/InfoText";
import { useParams } from "react-router-dom";

const SuccessOrder = () => {
	const params = useParams();

	const orderId = params.id;

	return (
		<div>
			<InfoText>Ваш заказ #{orderId} успешно оформлен!</InfoText>
		</div>
	);
};

export default SuccessOrder;
