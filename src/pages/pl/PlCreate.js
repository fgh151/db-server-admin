import * as React from "react";

import {Create, required, SelectInput, SimpleForm, TextInput} from 'react-admin';

export const PlCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <SelectInput source="input" choices={[
                {id: 'func', name: 'Function'},
            ]}/>
            <TextInput source="input_id" validate={required()}/>
            <SelectInput source="output" choices={[
                {id: 'topic', name: 'Topic'},
            ]}/>
            <TextInput source="output_id" validate={required()}/>
        </SimpleForm>
    </Create>
);