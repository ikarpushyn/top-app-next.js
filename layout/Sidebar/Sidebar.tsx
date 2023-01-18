import React from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { LayoutProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: LayoutProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};
