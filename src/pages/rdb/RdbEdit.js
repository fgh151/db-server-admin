import * as React from "react";

import {Edit, SimpleForm, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';

export const RdbEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="collection" validate={required()}/>


            <ReferenceInput label="Project" source="project_id" reference="admin/projects">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);