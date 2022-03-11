import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="email"/>
            <TextField source="token"/>
        </Datagrid>
    </List>);
}