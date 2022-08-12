import * as React from "react";

import {Edit, SimpleForm, TextInput, required, ReferenceInput, SelectInput, BooleanInput} from 'react-admin';

export const EditPlugin = (props) => (
    <Edit {...props}>
        <SimpleForm>
             <TextInput source="file_name" validate={required()} name='file_name'/>
        </SimpleForm>
    </Edit>
);