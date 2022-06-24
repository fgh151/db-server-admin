import * as React from 'react';
import {useState} from 'react';
import {useLogin, useNotify} from 'react-admin';
import {apiUrl, httpClient} from "../../utils/http";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        login({email, password}).catch(() =>
            notify('Invalid email or password')
        );
    };

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
            <button onClick={vk}>Vk</button>
            <button onClick={yandex}>Yandex</button>

        </>
    );
};

export default LoginPage;