import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const ProjectEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <TextInput source="key" validate={required()}/>
            <TextInput multiline source="origins" validate={required()}/>
        </SimpleForm>
    </Edit>
);