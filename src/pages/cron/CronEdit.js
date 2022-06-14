import * as React from "react";

import {Edit, SimpleForm, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';

export const EditCron = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="time_params" validate={required()}/>
            <ReferenceInput label="Function" source="function_id" reference="admin/cf">
                <SelectInput optionText="title" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);