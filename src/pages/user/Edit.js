import * as React from "react";

import {Edit, SimpleForm, TextInput, required, BooleanInput} from 'react-admin';

export const EditUser = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" validate={required()}/>
            <TextInput source="token" validate={required()}/>
            <BooleanInput label="Admin" source="admin" />
            <BooleanInput label="Active" source="active" />
        </SimpleForm>
    </Edit>
);