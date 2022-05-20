import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const EditCf = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="container" validate={required()}/>
            <TextInput source="params"/>
            <TextInput source="project_id" validate={required()}/>
        </SimpleForm>
    </Edit>
);