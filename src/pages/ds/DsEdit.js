import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const EditDs = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="dsn" validate={required()}/>
            <TextInput source="project_id" validate={required()}/>
        </SimpleForm>
    </Edit>
);