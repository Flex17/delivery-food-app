import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@hooks/redux";
import InfoText from "@ui/InfoText/InfoText";

const SuccessOrder = () => {
	const { t } = useTranslation();

	const params = useParams();

	const orderId = params.id;

	const name = useAppSelector(state => state.authReducer.displayName);

	return (
		<>
			<InfoText>
				{name}, {t("successOrder.thanks")}
			</InfoText>
			<InfoText>
				{t("successOrder.order.first")} #{orderId} {t("successOrder.order.second")}
			</InfoText>
		</>
	);
};

export default SuccessOrder;
