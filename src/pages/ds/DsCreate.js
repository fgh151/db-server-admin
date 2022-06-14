import * as React from "react";

import {Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';

export const DsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="dsn" validate={required()}/>
            <ReferenceInput label="Project" source="project_id" reference="admin/topics">
                <SelectInput optionText="topic" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);