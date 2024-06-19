export interface IUser {
	id: string;
	name: string;
	username: string;
	email: string;
	albums?: IAlbum[];
}

export interface IAlbum {
	albumId: string;
	userId: string;
	title: string;
}

export interface IPhoto {
	albumId: string;
	id: string;
	title: string;
	url: string;
}

export type TUsersAlbums = Record<string, IAlbum[]>;

export type TPhotos = Record<string, IPhoto[]>;
