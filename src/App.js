import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, fetchUtils, Resource} from 'react-admin';
import {TopicCreate} from "./pages/topic/TopicCreate";
import {TopicEdit} from "./pages/topic/TopicEdit";
import AuthProvider from "./authProvider";
import LoginPage from "./LoginPage";
import LogoutButton from "./components/LogoutButton";
import {UserList} from "./pages/user/list";
import {TopicsList} from "./pages/topic/list";
import {CreateUser} from "./pages/user/Create";
import {EditUser} from "./pages/user/Edit";
import customRoutes from './customRoutes';
import Layout from "./Layout";

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
    <Admin
        // menu={Menu}
        layout={Layout}
        customRoutes={customRoutes}
        dataProvider={dataProvider}
        authProvider={AuthProvider}
        loginPage={LoginPage}
        logoutButton={LogoutButton}
    >
        <Resource
            name="admin/topics"
            list={TopicsList}
            options={{label: 'Topics'}}
            create={TopicCreate}
            edit={TopicEdit}
        />
        <Resource
            name="admin/users"
            list={UserList}
            options={{label: 'Admins'}}
            create={CreateUser}
            edit={EditUser}
        />
    </Admin>
);

export default App;
