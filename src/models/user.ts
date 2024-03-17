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
}

export interface IAuth {
	auth: string,
}

export interface IAuthRequest extends IAuth {
	localId: string;
}

