import * as React from "react";

import {Create, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from 'react-admin';
import {useParams} from "react-router-dom";
import {Breadcrumbs} from "@material-ui/core";
import Link from "@mui/material/Link";
import Typography from "@material-ui/core/Typography";

export const DseCreate = (props) => {

    const {dsId} = useParams();

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href='/#/admin/ds/'>
                    Data sources
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href={`/#/admin/ds/${dsId}`}
                >
                    {dsId}
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href={`/#/admin/ds/dse/${dsId}`}
                >
                    Endpoints
                </Link>
                <Typography color="textPrimary">Create</Typography>
            </Breadcrumbs>
            <Create {...props} resource={`admin/ds/dse/${dsId}`}>
                <SimpleForm>
                    <TextInput source="title" validate={required()}/>
                    <TextInput source="table_name"/>
                    <ReferenceInput label="Source" source="data_source" reference="admin/ds">
                        <SelectInput optionText="title" validate={required()}/>
                    </ReferenceInput>
                </SimpleForm>
            </Create>
        </div>
    )
};