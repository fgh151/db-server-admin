import * as React from "react";

import {Edit, SimpleForm, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';

export const EditDs = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="dsn" validate={required()}/>
            <ReferenceInput label="Project" source="project_id" reference="admin/topics">
                <SelectInput optionText="topic" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);