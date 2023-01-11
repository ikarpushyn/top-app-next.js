import React from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { LayoutProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: LayoutProps): JSX.Element => {
	return <div {...props}>
		Sidebar
	</div>;
};
