import * as React from "react";
import {List, Datagrid, TextField, BooleanField, DateField, FunctionField} from 'react-admin';

export const UserList = props => {
    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="email"/>
            <BooleanField source="admin" />
            <BooleanField source="active" />
            <TextField source="token"/>
            <DateField source="lastLogin" showTime={true} />
             <FunctionField label='Devices'  render={(p) => {
                 return p.devices.map((device, i) => <div key={i}>{device.device}</div>)
            }}/>
        </Datagrid>
    </List>);
}