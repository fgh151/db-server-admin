import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import {TopicsList} from "./topics";

const dataProvider = jsonServerProvider('http://localhost:9090');


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="admin/topics" list={TopicsList} route="/admin/topics"/>
    </Admin>
);

export default App;
