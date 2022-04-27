import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const ConfigList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="Title"/>
        </Datagrid>
    </List>);
}