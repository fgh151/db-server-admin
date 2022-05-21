import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, fetchUtils, Resource, localStorageStore, CustomRoutes} from 'react-admin';
import {TopicCreate} from "./pages/topic/TopicCreate";
import {TopicEdit} from "./pages/topic/TopicEdit";
import AuthProvider from "./authProvider";
import {UserList} from "./pages/user/list";
import {TopicsList} from "./pages/topic/list";
import {CreateUser} from "./pages/user/Create";
import {EditUser} from "./pages/user/Edit";
import Layout from "./Layout";
import {ConfigList} from "./pages/config/list";
import {EditConfig} from "./pages/config/ConfigEdit";
import {ConfigCreate} from "./pages/config/ConfigCreate";
import {DsCreate} from "./pages/ds/DsCreate";
import {EditDs} from "./pages/ds/DsEdit";
import {DsList} from "./pages/ds/list";
import {Route} from "react-router-dom";
import Monitor from "./pages/monitor/Monitor";
import {CfCreate} from "./pages/cf/CfCreate";
import {EditCf} from "./pages/cf/CfEdit";
import {CfList} from "./pages/cf/list";

const store = localStorageStore();
store.setItem('sidebar.open', true);

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(window._env_.REACT_APP_SERVER_SCHEMA+'://'+window._env_.REACT_APP_SERVER_URL, httpClient);

const App = () => (
    <Admin
        disableTelemetry
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={AuthProvider}
        store={store}
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
        <Resource
            name="admin/config"
            list={ConfigList}
            options={{label: 'Configs'}}
            create={ConfigCreate}
            edit={EditConfig}
        />
        <Resource
            name="admin/ds"
            list={DsList}
            options={{label: 'Configs'}}
            create={DsCreate}
            edit={EditDs}
        />
        <Resource
            name="admin/cf"
            list={CfList}
            options={{label: 'Functions'}}
            create={CfCreate}
            edit={EditCf}
        />
        <CustomRoutes>
            <Route exact path="/monitor" element={<Monitor />} />
        </CustomRoutes>
    </Admin>
);

export default App;
