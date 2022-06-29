import * as React from "react";
import {List, Datagrid, TextField, EditButton} from 'react-admin';

export const RdbList = props => {
    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="collection"/>
            <EditButton/>
        </Datagrid>
    </List>);
}