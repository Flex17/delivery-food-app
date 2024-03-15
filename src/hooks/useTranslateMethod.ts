import { useTranslation } from "react-i18next";

export const useTranslateMethod = () => {
	const { t } = useTranslation();

	const checkMethod = (method?: string) => {
		if (method === "Наличными") {
			return t("cart.form.method.cash");
		} else if (method === "По карте") {
			return t("cart.form.method.byCard");
		} else {
			return t("cart.form.method.notSelected");
		}
	};

	return {
		checkMethod
	};
};
