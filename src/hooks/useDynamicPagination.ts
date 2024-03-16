import { useEffect, useState } from "react";

const useDynamicPagination = (data: any[], total: number, fetchFunc: () => any, increaseStartAt: () => void, increaseEnd: () => void) => {
	const [fetching, setFetching] = useState(false);

	const onFetch = () => {
		fetchFunc()
			.then(() => {
				setFetching(false);
				increaseStartAt();
				increaseEnd();
			});
	};

	useEffect(() => {
		if (!data.length) {
			onFetch();
		}
	}, []);

	useEffect(() => {
		if (fetching) {
			onFetch();
		}
	}, [fetching]);

	const scrollHandler = (e: any) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
			&& data.length < total
		) {
			setFetching(true);
		}
	};
	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => document.removeEventListener("scroll", scrollHandler);
	});
};

export default useDynamicPagination;
