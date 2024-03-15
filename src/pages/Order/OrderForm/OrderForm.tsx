import MainInput from "../../../ui/MainInput/MainInput";
import { SubmitHandler, useForm } from "react-hook-form";
import css from "./orderForm.module.scss";
import MainButton from "../../../ui/MainButton/MainButton";
import Dropdown from "../../../ui/Dropdown/Dropdown";
import { PaymentMethodT } from "../../../ui/Dropdown/DropdownItem/DropdownItem";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { orderSlice } from "../../../redux/reducers/OrderSlice";
import { useTranslation } from "react-i18next";

export interface OrderFormI {
	address: string;
}

interface OrderFormProps {
	submit: SubmitHandler<OrderFormI>,
}

const paymentMethods: PaymentMethodT[] = ["Наличными", "По карте"];

const OrderForm = ({ submit }: OrderFormProps) => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const paymentMethod = useAppSelector(state => state.orderReducer.paymentMethod);

	const {
		register,
		handleSubmit,
		formState: {
			isValid,
		},
		getValues,
	} = useForm<OrderFormI>({
		mode: "onBlur",
	});

	const handlePaymentMethod = (method: PaymentMethodT) => {
		dispatch(orderSlice.actions.setPaymentMethod(method));
	};

	const addressRegister = {
		...register("address", {
			required: true,
		})
	};
	const addressValue = getValues("address");

	useEffect(() => {
		dispatch(orderSlice.actions.setAddress(getValues("address")));
	}, [addressValue]);

	return (
		<form className={css.wrapper} onSubmit={handleSubmit(submit)}>
			<h2 className={css.title}>{t("cart.form.title")}</h2>
			<MainInput className={css.input} placeholder={t("cart.form.address")} {...addressRegister} />
			<Dropdown currentItem={paymentMethod} setCurrentMethod={handlePaymentMethod} methods={paymentMethods}/>
			<MainButton
				styles={css.btn}
				type="submit"
				state={isValid && paymentMethod ? "default" : "disabled"}
			>
				{t("cart.form.order")}
			</MainButton>
		</form>
	);
};

export default OrderForm;
