import React from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { LayoutProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: LayoutProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<span>
				<a href="http://localhost:3000/">www</a>
			</span>
			<Search />
			<Menu />
		</div>
	);
};
