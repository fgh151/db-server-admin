import * as React from "react";

import {Edit, SimpleForm, TextInput, required, SelectInput} from 'react-admin';

export const EditPipeline = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <SelectInput source="input" choices={[
                {id: 'func', name: 'Function'},
            ]}/>
            <TextInput source="input_id" validate={required()}/>
            <SelectInput source="output" choices={[
                {id: 'topic', name: 'Topic'},
                {id: 'plugin', name: 'Plugin'},
            ]}/>
            <TextInput source="output_id" validate={required()} />
        </SimpleForm>
    </Edit>
);