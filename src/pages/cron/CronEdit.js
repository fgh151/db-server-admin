import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const EditCron = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="time_params" validate={required()}/>
            <TextInput source="function_id" validate={required()}/>
        </SimpleForm>
    </Edit>
);