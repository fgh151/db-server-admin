import * as React from "react";

import {Create, SimpleForm, TextInput, required} from 'react-admin';

export const CronCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="time_params" validate={required()}/>
            <TextInput source="function_id" validate={required()}/>
        </SimpleForm>
    </Create>
);