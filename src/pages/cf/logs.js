import * as React from "react";
import {List, Datagrid, TextField} from 'react-admin';
import {useParams} from "react-router-dom"

export const LogList = props => {

    const {id} = useParams();

    return (
        <List {...props} resource={`/admin/cf/${id}/log`}>
            <Datagrid>
                <TextField source="run_at"/>
                <TextField source="result"/>
            </Datagrid>
        </List>
    );
}