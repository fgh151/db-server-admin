import * as React from "react";

import {Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';

export const RdbCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="collection" validate={required()}/>


            <ReferenceInput label="Project" source="project_id" reference="admin/projects">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);