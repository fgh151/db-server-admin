import * as React from "react";

import {Edit, SimpleForm, TextInput, required, FileInput, FileField} from 'react-admin';

export const EditCf = (props) => (
    <Edit {...props} >
        <SimpleForm >
            <TextInput source="title" validate={required()}/>
            <TextInput source="container" validate={required()}/>
            <TextInput source="params"/>
            <TextInput source="project_id" validate={required()}/>
            <FileInput name='dockerarc' source='dockerarc'>
                <FileField source="dockerarc"  name='dockerarc' title="dockerarc" />
            </FileInput>
        </SimpleForm>
    </Edit>
);