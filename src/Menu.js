import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';
import CallMerge from '@material-ui/icons/CallMerge';
import FunctionsIcon from '@material-ui/icons/Functions';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const MainMenu = (props) => (
    <Menu {...props}>
        <DashboardMenuItem />
        <MenuItemLink to="/admin/topics" primaryText="Topics" leftIcon={<BookIcon />}/>
        <MenuItemLink to="/admin/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
        <MenuItemLink to="/admin/config" primaryText="Configs" leftIcon={<SettingsApplications />}/>
        <MenuItemLink to="/admin/ds" primaryText="Data sources" leftIcon={<CallMerge />}/>
        <MenuItemLink to="/admin/cf" primaryText="functions" leftIcon={<FunctionsIcon />}/>
        <MenuItemLink to="/admin/push" primaryText="push" leftIcon={<InboxIcon />}/>
        <MenuItemLink to="/admin/cron" primaryText="cron" leftIcon={<AccessTimeIcon />}/>
        <MenuItemLink to="/admin/pl" primaryText="Pipelines" leftIcon={<AltRouteIcon />}/>
        <MenuItemLink to="/monitor" primaryText="Monitor" leftIcon={<LabelIcon />}/>
    </Menu>
);

export default MainMenu