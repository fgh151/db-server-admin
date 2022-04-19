import * as React from "react";

import {Create, SimpleForm, TextInput, required, BooleanInput} from 'react-admin';

export const CreateUser = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" validate={required()}/>
            <TextInput source="password" validate={required()}/>
            <BooleanInput label="Admin" source="admin" />
            <BooleanInput label="Active" source="active" />
        </SimpleForm>
    </Create>
);