import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const ConfigCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="body" validate={required()}/>
        </SimpleForm>
    </Create>
);