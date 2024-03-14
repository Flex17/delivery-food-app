import React from "react";
import css from "./infoText.module.scss";

const InfoText = ({ children }: { children: React.ReactNode }) => {

	return (
		<h3 className={css.wrapper}>{children}</h3>
	);
};

export default InfoText;
