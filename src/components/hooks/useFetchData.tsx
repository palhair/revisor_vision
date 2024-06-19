import { fetchAlbums } from '@/lib/features/albums/albumsSlice';
import { fetchPhotos } from '@/lib/features/photos/photosSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { IAlbum, IPhoto } from '@/types';
import { useState } from 'react';

interface IUseFetchAlbum {
	id: string;
	type: 'photos' | 'albums';
}

const useFetchData = ({ id, type }: IUseFetchAlbum) => {
	const dispatch = useAppDispatch();
	const [data, setData] = useState<IPhoto[] | IAlbum[]>([]);
	console.log('asdfasdfasdfas');
	const albums = useAppSelector((state) => state.usersAlbums.usersAlbums);
	const photos = useAppSelector((state) => state.photos.photos);

	if ((type = 'photos')) {
		if (!photos.hasOwnProperty(id)) {
			dispatch(fetchPhotos(id));
		}

		setData(photos[id]);
	} else {
		if (!albums.hasOwnProperty(id)) {
			dispatch(fetchAlbums(id));
		}

		setData(albums[id]);
	}

	return data;
};

export default useFetchData;
