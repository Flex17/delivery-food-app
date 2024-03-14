import { TailSpin } from "react-loader-spinner";
import css from "./loader.module.scss";

const Loader = () => {

	return (
		<div className={css.wrapper}>
			<TailSpin visible={true} height={80} width={80} color="#3F9E37"/>
		</div>
	);
};

export default Loader;
