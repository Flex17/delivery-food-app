export interface IUser {
	email: string,
	password: string,
}

export interface IUserInfo {
	createdAt: string,
	email: string,
	emailVerified: false,
	lastLoginAt: string,
	lastRefreshAt: string,
	localId: string,
	name: string,
	displayName: string,
}

export interface IAuthRequest {
	localId: string;
}

