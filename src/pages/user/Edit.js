import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const EditUser = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" validate={required()}/>
            <TextInput source="token" validate={required()}/>
        </SimpleForm>
    </Edit>
);