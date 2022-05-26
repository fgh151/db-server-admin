import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const PushCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="body" validate={required()}/>
            <TextInput source="payload"/>
            <TextInput source="topic" validate={required()}/>
        </SimpleForm>
    </Create>
);