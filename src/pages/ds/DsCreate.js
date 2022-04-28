import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const DsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="dsn" validate={required()}/>
            <TextInput source="project_id" validate={required()}/>
        </SimpleForm>
    </Create>
);