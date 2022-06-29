import * as React from "react";
import {Edit, SimpleForm, TextInput, required, FileInput, FileField, ReferenceInput, SelectInput} from 'react-admin';
import {Grid} from "@material-ui/core";

export const EditCf = (props) => (
    <Edit {...props} >
        <SimpleForm >
            <Grid container spacing={1} style={{width: "100%"}}>
                <Grid item xs={6}>
                    <TextInput source="title" validate={required()} fullWidth={true}/>
                    <TextInput source="container" validate={required()} fullWidth={true}/>
                    <TextInput source="params" fullWidth={true}/>
                    <TextInput source="env" multiline={true} fullWidth={true}/>
                </Grid>
                <Grid item xs={6}>
                     <ReferenceInput label="Project" source="project_id" reference="admin/projects">
                        <SelectInput optionText="name" validate={required()}  fullWidth={true}/>
                    </ReferenceInput>
                    <FileInput name='dockerarc' source='dockerarc'>
                        <FileField source="dockerarc" name='dockerarc' title="dockerarc"/>
                    </FileInput>
                </Grid>
            </Grid>
        </SimpleForm>
    </Edit>
);