import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const ProjectCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <TextInput source="key" validate={required()}/>
            <TextInput multiline source="origins" validate={required()}/>
        </SimpleForm>
    </Create>
);