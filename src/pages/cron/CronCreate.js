import * as React from "react";

import {Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';

export const CronCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="time_params" validate={required()}/>
            <ReferenceInput label="Function" source="function_id" reference="admin/cf">
                <SelectInput optionText="title" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);