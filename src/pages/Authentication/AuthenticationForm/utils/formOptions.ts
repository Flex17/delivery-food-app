import { RegisterOptions } from "react-hook-form";

export const emailPlaceholder = "yourmail@mail.ru";

export const EMAIL_ERROR = "Неверная форма записи e-mail";

export const emailPatternValue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailInputOptions: RegisterOptions = {
	required: true,
	max: 50,
	maxLength: {
		value: 50,
		message: EMAIL_ERROR,
	},
	pattern: {
		value: emailPatternValue,
		message: EMAIL_ERROR,
	},
};
