import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Input, P, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import { Tag } from './../components/Tag/Tag';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Textarea } from './../components/Textarea/Textarea';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">Text</Htag>
			<Htag tag="h1">{1}</Htag>
			<Button appearance="primary" arrow="right">
				KNOPKA
			</Button>
			<Button appearance="ghost" arrow="down">
				KNOPKA
			</Button>
			<P size="l">big</P>
			<P size="m">med</P>
			<P size="s">small</P>
			<Tag size="m">small</Tag>
			<Tag size="m" color="red">
				red
			</Tag>
			<Tag size="s" color="green">
				green
			</Tag>
			<Tag size="s" color="primary">
				green
			</Tag>
			<Tag href="google.com" size="s" color="primary">
				href
			</Tag>

			<Rating rating={rating} isEditable setRating={setRating} />

			<Input placeholder="Имя" />
			<Input placeholder="Фамилия" />
			<Textarea placeholder="Текст Отзыва" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
