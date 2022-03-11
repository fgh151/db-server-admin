import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, fetchUtils, Resource} from 'react-admin';
import {TopicsList} from "./topics";
import {TopicCreate} from "./TopicCreate";
import {TopicEdit} from "./TopicEdit";
import AuthProvider from "./authProvider";
import LoginPage from "./LoginPage";
import LogoutButton from "./components/LogoutButton";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:9090', httpClient);


const App = () => (
    <Admin dataProvider={dataProvider} authProvider={AuthProvider} loginPage={LoginPage}>
        <Resource
            name="admin/topics"
            list={TopicsList}
            options={{label: 'Topics'}}
            create={TopicCreate}
            edit={TopicEdit}
            logoutButton={LogoutButton}
        />
    </Admin>
);

export default App;
