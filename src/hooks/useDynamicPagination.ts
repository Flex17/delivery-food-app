import { useEffect, useState } from "react";

const PER_PAGE = 8;

const useDynamicPagination = (data: any[], total: number, fetchFunc: (startAt: number, endAt: number) => any) => {
	const [fetching, setFetching] = useState(false);

	const [startAt, setStartAt] = useState(1);
	const [endAt, setEndAt] = useState(PER_PAGE);

	useEffect(() => {
		if (!data.length) {
			fetchFunc(startAt, endAt)
				.then(() => {
					setFetching(false);
					setStartAt(prev => prev + PER_PAGE);
					setEndAt(prev => prev + PER_PAGE);
				});
		}
	}, []);

	useEffect(() => {
		if (fetching) {
			fetchFunc(startAt, endAt)
				.then(() => {
					setFetching(false);
					setStartAt(prev => prev + PER_PAGE);
					setEndAt(prev => prev + PER_PAGE);
				});
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
