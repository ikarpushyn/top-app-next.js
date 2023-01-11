import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return <div {...props}>Footer</div>;
};
