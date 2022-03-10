import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const TopicEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="topic" validate={required()}/>
            <TextInput source="key" validate={required()}/>
        </SimpleForm>
    </Edit>
);