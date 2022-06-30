import "./App.css"

import * as React from "react";
import {Admin, CustomRoutes, localStorageStore, Resource, Authenticated} from 'react-admin';
import AuthProvider from "./authProvider";
import {UserList} from "./pages/user/list";
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
import {LogList} from "./pages/cf/logs";
import {dataProvider} from "./utils/http";
import {PushList} from "./pages/push/list";
import {PushCreate} from "./pages/push/PushCreate";
import {EditPush} from "./pages/push/CfEdit";
import {CronList} from "./pages/cron/list";
import {CronCreate} from "./pages/cron/CronCreate";
import {EditCron} from "./pages/cron/CronEdit";
import {DseList} from "./pages/dse/list";
import {DseCreate} from "./pages/dse/DseCreate";
import {DseEdit} from "./pages/dse/DseEdit";
import {PipelineList} from "./pages/pl/list";
import {PlCreate} from "./pages/pl/PlCreate";
import {EditPipeline} from "./pages/pl/PlEdit";
import {Login} from "./pages/auth/Login";
import OAuth from "./pages/auth/OAuth";
import {ProjectsList} from "./pages/projects/list";
import {ProjectCreate} from "./pages/projects/ProjectCreate";
import {ProjectEdit} from "./pages/projects/ProjectEdit";
import {RdbList} from "./pages/rdb/list";
import {RdbCreate} from "./pages/rdb/RdbCreate";
import {RdbEdit} from "./pages/rdb/RdbEdit";

const store = localStorageStore();
store.setItem('sidebar.open', true);

const App = () => (
    <Admin
        loginPage={<Login backgroundImage="/login_bg.jpg" />}
        disableTelemetry
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={AuthProvider}
        store={store}
    >
        <Resource
            name="admin/projects"
            list={ProjectsList}
            options={{label: 'Projects'}}
            create={ProjectCreate}
            edit={ProjectEdit}
            re
        />
        <Resource
            name="admin/rdb"
            list={RdbList}
            options={{label: 'Databases'}}
            create={RdbCreate}
            edit={RdbEdit}
            re
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
            options={{label: 'Data sources'}}
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
        <Resource
            name="admin/pl"
            list={PipelineList}
            options={{label: 'Pipelines'}}
            create={PlCreate}
            edit={EditPipeline}
        />
        <Resource
            name="admin/push"
            list={PushList}
            options={{label: 'Push'}}
            create={PushCreate}
            edit={EditPush}
        />
        <Resource
            name="admin/cron"
            list={CronList}
            options={{label: 'Cron'}}
            create={CronCreate}
            edit={EditCron}
        />
        <CustomRoutes>
            <Route exact path="/admin/ds/dse/:dsId" element={<DseList/>}
                   render={(routeProps) => <DseList resource="admin/ds/dse/:dsId" {...routeProps} />}/>
            <Route exact path="/admin/ds/dse/:dsId/:id" element={<DseEdit/>}
                   render={(routeProps) => <DseEdit resource="admin/ds/dse/:dsId/:id" {...routeProps} />}/>
            <Route exact path="/admin/ds/dse/:dsId/create" element={<DseCreate/>}
                   render={(routeProps) => <DseCreate resource="admin/ds/dse/:dsId" {...routeProps} />}/>
            <Route exact path="/log/cf/:id" element={<LogList/>}
                   render={(routeProps) => <LogList resource="logs" {...routeProps} />}/>
            {/*<Route exact path="/topic/data/:id/:name" element={<ListData/>}*/}
            {/*       render={(routeProps) => <ListData resource="em" {...routeProps} />}/>*/}
            <Route exact path="/monitor" element={<Monitor/>}/>
        </CustomRoutes>
        <CustomRoutes noLayout>
            <Route exact path="/oauth/:provider" render={(routerProps) => <OAuth {...routerProps} />}
                   element={<OAuth/>}/>
        </CustomRoutes>

    </Admin>
);

export default App;
