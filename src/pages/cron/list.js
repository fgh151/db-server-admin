import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const CronList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="time_params"/>
        </Datagrid>
    </List>);
}