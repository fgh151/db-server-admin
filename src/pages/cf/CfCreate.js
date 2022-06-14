import * as React from "react";

import {Create, SimpleForm, TextInput, required, FileInput, FileField, ReferenceInput, SelectInput} from 'react-admin';

export const CfCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="container" validate={required()}/>
            <TextInput source="params"/>
            <ReferenceInput label="Project" source="project_id" reference="admin/topics">
                <SelectInput optionText="topic" validate={required()}/>
            </ReferenceInput>
            <FileInput name='dockerarc' source='dockerarc'>
                <FileField source="dockerarc"  name='dockerarc' title="dockerarc" />
            </FileInput>
        </SimpleForm>
    </Create>
);