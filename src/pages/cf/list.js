import * as React from "react";
import { List, Datagrid, TextField, FunctionField } from 'react-admin';
import {Link} from "react-router-dom";

export const CfList = props => {
    return (<List {...props}>
        <Datagrid>
            <FunctionField render={(p) => {
                return (<Link to={`/admin/cf/${p.id}`} title="fff">{p.id}</Link>)
            }} />
            <TextField source="title"/>
            <FunctionField render={(p) => {
                return (<Link to={`/log/cf/${p.id}`} title="fff"> logs</Link>)
            }} />
        </Datagrid>
    </List>);
}