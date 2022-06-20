import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import {apiUrl, dataProvider, httpClient} from "../../utils/http";

const LoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    const github = e => {
        httpClient(`${apiUrl}/api/user/oauth/github/link`, {method: 'GET'})
            .then(value => {
                console.log(value.body)

                const w = window.open(value.body)
            })
    }

    return (

        <>

        <form onSubmit={handleSubmit}>
            <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </form>

            <button onClick={github}>Github</button>

        </>
    );
};

export default LoginPage;