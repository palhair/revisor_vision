import { getAlbumsByUserId } from '@/services/almbum';
import { IAlbum } from '@/types';
import { useState } from 'react';

interface IUseFetchAlbum {
	userId: string;
}

const useFetchAlbum = async (userId: string) => {
	const [albums, setAlbums] = useState<IAlbum[]>([]);
	const album = await getAlbumsByUserId(userId);
	setAlbums(album);

	return albums;
};

export default useFetchAlbum;
