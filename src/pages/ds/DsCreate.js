import * as React from "react";

import {Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput, BooleanInput} from 'react-admin';

export const DsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()}/>
            <TextInput source="dsn" validate={required()}/>

            <SelectInput source="type" choices={[
                {id: 'Mysql', name: 'Mysql'},
                {id: 'Postgres', name: 'Postgres'},
                {id: 'Sqlite', name: 'Sqlite'},
                {id: 'Xml', name: 'Xml'},
            ]}/>
            <BooleanInput label="Cache" source="cache"/>
            <ReferenceInput label="Project" source="project_id" reference="admin/topics">
                <SelectInput optionText="topic" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);