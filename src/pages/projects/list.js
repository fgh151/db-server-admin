import * as React from "react";
import {List, Datagrid, TextField, EditButton} from 'react-admin';

export const ProjectsList = props => {
    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="key"/>
            <EditButton/>
        </Datagrid>
    </List>);
}