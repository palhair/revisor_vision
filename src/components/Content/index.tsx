'use client';
import { useAppSelector } from '@/lib/hooks';
import Catalog from '../Catalog';

const Content = () => {
	const tabSelecor = useAppSelector((state) => state.tab.tab);

	return <div>{tabSelecor == 'catalog' ? <Catalog /> : <div>Избранное</div>}</div>;
};

export default Content;
