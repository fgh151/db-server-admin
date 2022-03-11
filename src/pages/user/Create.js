import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const CreateUser = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" validate={required()}/>
            <TextInput source="password" validate={required()}/>
        </SimpleForm>
    </Create>
);