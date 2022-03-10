import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import {TopicsList} from "./topics";
import {TopicCreate} from "./TopicCreate";
import {TopicEdit} from "./TopicEdit";

const dataProvider = jsonServerProvider('http://localhost:9090');


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="admin/topics" list={TopicsList} options={{ label: 'Topics' }} create={TopicCreate} edit={TopicEdit}/>
    </Admin>
);

export default App;
