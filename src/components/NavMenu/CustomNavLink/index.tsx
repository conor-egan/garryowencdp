import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './styles.module.scss';

interface CustomNavLinkProps extends NavLinkProps {
    to: string;
    children: React.ReactNode;
}

export const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, ...props }) => {
    return (
        <NavLink to={to} {...props} className={({ isActive }) => isActive ? styles.activeLink : ""}>
            {children}
        </NavLink>
    );
};
