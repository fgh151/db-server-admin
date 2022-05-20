import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const CfCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="container" validate={required()}/>
            <TextInput source="params"/>
        </SimpleForm>
    </Create>
);