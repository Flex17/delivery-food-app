import css from "./notFound.module.scss";

const NotFound = () => {

	return (
		<div className={css.wrapper}>
			<span className={css.title}>404</span>
			<span className={css.description}>Страница не найдена...</span>
		</div>
	);
};

export default NotFound;
