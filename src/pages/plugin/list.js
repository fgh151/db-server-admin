import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const PluginList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="file_name"/>
        </Datagrid>
    </List>);
}