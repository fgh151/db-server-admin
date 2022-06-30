import * as React from 'react';
import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Box, Card, Avatar, Button} from '@mui/material';
import {styled} from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from 'react-router-dom';
import {useCheckAuth} from 'ra-core';
import {LoginForm as DefaultLoginForm} from './LoginForm';
import {apiUrl, httpClient} from "../../utils/http";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faVk, faYandex} from "@fortawesome/free-brands-svg-icons";


/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
export const Login = (props) => {
    const {children, backgroundImage, ...rest} = props;
    const containerRef = useRef();
    let backgroundImageLoaded = false;
    const checkAuth = useCheckAuth();
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth({}, false)
            .then(() => {
                // already authenticated, redirect to the home page
                navigate('/');
            })
            .catch(() => {
                // not authenticated, stay on the login page
            });
    }, [checkAuth, navigate]);

    const oauth = (provider) => {
        httpClient(`${apiUrl}/api/user/oauth/${provider}/link`, {method: 'GET'})
            .then(value => {

                window.location.href = value.body
            })
    }

    const github = () => {
        oauth('github')
    }
    const vk = () => {
        oauth('vk')
    }
    const yandex = () => {
        oauth('yandex')
    }

    const updateBackgroundImage = () => {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
            backgroundImageLoaded = true;
        }
    };

    // Load background image asynchronously to speed up time to interactive
    const lazyLoadBackgroundImage = () => {
        if (backgroundImage) {
            const img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };

    useEffect(() => {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return (
        <Root {...rest} ref={containerRef}>
            <Card className={LoginClasses.card}>
                <div className={LoginClasses.avatar}>
                    <Avatar className={LoginClasses.icon}>
                        <LockIcon/>
                    </Avatar>
                </div>
                {children}
                <Box display="flex" justifyContent='space-between' padding="16px">
                    <Button onClick={github} variant="contained">
                        <FontAwesomeIcon icon={faGithub} />&nbsp;Github
                    </Button>
                    <Button onClick={vk} variant="contained">
                        <FontAwesomeIcon icon={faVk} />&nbsp;Vk
                    </Button>
                    <Button onClick={yandex} variant="contained">
                        <FontAwesomeIcon icon={faYandex} />&nbsp;Yandex
                    </Button>
                </Box>
            </Card>
        </Root>
    );
};


const PREFIX = 'RaLogin';
export const LoginClasses = {
    card: `${PREFIX}-card`,
    avatar: `${PREFIX}-avatar`,
    icon: `${PREFIX}-icon`,
};

const Root = styled('div', {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '1px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage:
        'radial-gradient(circle at 50% 14em, #FFC300 0%, #196F3D  60%, #333 100%)',

    [`& .${LoginClasses.card}`]: {
        minWidth: 300,
        marginTop: '6em',
    },
    [`& .${LoginClasses.avatar}`]: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${LoginClasses.icon}`]: {
        backgroundColor: theme.palette.secondary[500],
    },
}));

Login.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};

Login.defaultProps = {
    children: <DefaultLoginForm/>,
};