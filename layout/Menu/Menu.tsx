import React, { useContext, useEffect } from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
	const { firstCategory, menu, setMenu } = useContext(AppContext);

	useEffect(() => {
		setMenu && setMenu([]);
	});

	return (
		<div>
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</div>
	);
};
