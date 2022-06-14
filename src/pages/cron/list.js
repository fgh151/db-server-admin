import * as React from "react";
import {List, Datagrid, TextField, ReferenceField} from 'react-admin';

export const CronList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="title"/>
            <ReferenceField label="Function" source="function_id" reference="admin/cf">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="time_params"/>
        </Datagrid>
    </List>);
}