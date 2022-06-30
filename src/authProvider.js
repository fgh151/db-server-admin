const authProvider = {
    login: ({email, password}) => {
        const request = new Request(window._env_.REACT_APP_SERVER_SCHEMA + '://' + window._env_.REACT_APP_SERVER_URL + '/admin/auth', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('user', JSON.stringify(auth));
                localStorage.setItem('token', auth.token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    oauth: ({provider, code}) => {
        const request = new Request(window._env_.REACT_APP_SERVER_SCHEMA + '://' + window._env_.REACT_APP_SERVER_URL + '/api/user/oauth/' + provider + '/' + code, {
            method: 'GET',
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('user', JSON.stringify(auth));
                localStorage.setItem('token', auth.token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject({redirectTo: '/login'}),
    getPermissions: (r) => {
        console.log('get permission')
        // Required for the authentication to work
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return Promise.resolve();
    },

    // when the dataProvider returns an error, check if this is an authentication error
    checkError: error => {
        console.log(error)
        return Promise.resolve();
    },
    // get the user's profile
    getIdentity: () => {
        return Promise.resolve()
    },
};

export default authProvider;