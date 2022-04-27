import * as React from "react";

import {Edit, SimpleForm, TextInput, required} from 'react-admin';

export const EditConfig = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput
                multiline={true}
                minRows={10}
                component='pre'
                source="body"
                // format={(s, d)=> JSON.stringify(s, undefined, 2)}
                validate={required()}
            />
        </SimpleForm>
    </Edit>
);