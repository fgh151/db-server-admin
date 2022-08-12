import * as React from "react";

import {Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput, BooleanInput} from 'react-admin';

export const PluginCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="file_name" validate={required()}/>
        </SimpleForm>
    </Create>
);