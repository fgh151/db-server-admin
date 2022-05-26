import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const EditPush = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="body" validate={required()}/>
            <TextInput source="payload"/>
            <TextInput source="topic" validate={required()}/>
        </SimpleForm>
    </Edit>
);