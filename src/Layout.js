import {defaultTheme, AppBar, Layout, ToggleThemeButton} from 'react-admin';
import MainMenu from './Menu';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Logo from "./logo.svg";
import * as React from "react";
import {createTheme} from '@mui/material';

const darkTheme = createTheme({
    palette: {mode: 'dark'},
});

const MainMonitor = (props) =>
    <Layout
        {...props}
        menu={MainMenu}
        appBar={MyAppBar}
    />;


const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    logo: {
        width: '43px'
    }
});

const MyAppBar = (props) => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="db-admin-title"
            />
            <img src={Logo} alt="Bd admin" className={classes.logo}/>
            <span className={classes.spacer}/>
            <ToggleThemeButton
                lightTheme={defaultTheme}
                darkTheme={darkTheme}
            />
        </AppBar>
    );
};

export default MainMonitor;