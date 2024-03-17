export const pathKeys = {
	root: "/",
	authorization() {
		return pathKeys.root.concat("authorization");
	},
	registration() {
		return pathKeys.root.concat("registration");
	},
	order() {
		return pathKeys.root.concat("order");
	},
	history() {
		return pathKeys.root.concat("history");
	},
	successOrderId(id: string) {
		return pathKeys.root.concat("success/" + id);
	},
	successOrderPage() {
		return pathKeys.root.concat("success/:id");
	},
};
