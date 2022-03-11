import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const TopicsList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="topic"/>
            <TextField source="key"/>
        </Datagrid>
    </List>);
}