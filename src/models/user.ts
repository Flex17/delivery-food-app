export interface IUser {
	email: string,
	password: string,
}

export interface UserInfoI {
	createdAt: string,
	email: string,
	emailVerified: false,
	lastLoginAt: string,
	lastRefreshAt: string,
	localId: string,
}
