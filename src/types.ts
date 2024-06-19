export interface IUser {
	id: string;
	name: string;
	username: string;
	email: string;
}

export interface IAlbums {
	albumId: string;
	userId: string;
	title: string;
}

export interface IPhotos {
	albumId: string;
	id: string;
	title: string;
	url: string;
}
