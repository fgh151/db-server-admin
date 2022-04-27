import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';

const MainMenu = (props) => (
    <Menu {...props}>
        <DashboardMenuItem />
        <MenuItemLink to="/admin/topics" primaryText="Topics" leftIcon={<BookIcon />}/>
        <MenuItemLink to="/admin/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
        <MenuItemLink to="/admin/config" primaryText="Configs" leftIcon={<PeopleIcon />}/>
        <MenuItemLink to="/monitor" primaryText="Monitor" leftIcon={<LabelIcon />}/>
    </Menu>
);

export default MainMenu