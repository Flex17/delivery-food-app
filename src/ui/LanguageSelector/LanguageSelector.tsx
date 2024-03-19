import { useTranslation } from "react-i18next";
import css from "./languageSelector.module.scss";

const languages = [
	{
		code: "ru",
		lang: "Русский"
	},
	{
		code: "en",
		lang: "English"
	},
];

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (code: string) => {
		i18n.changeLanguage(code);
	};

	return (
		<div className={css.wrapper}>
			{
				languages.map(({
					lang,
					code
				}) => {
					return (
						<button
							className={code === i18n.language ? css.selected : ""}
							onClick={() => changeLanguage(code)}
							key={code}
						>
							{lang}
						</button>
					);
				})
			}
		</div>
	);
};

export default LanguageSelector;
