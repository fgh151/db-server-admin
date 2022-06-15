import * as React from "react";
import {CreateButton, Datagrid, ExportButton, List, TextField, TopToolbar,} from 'react-admin';
import {useParams} from "react-router-dom";
import {Breadcrumbs} from "@material-ui/core";
import Link from "@mui/material/Link";
import Typography from "@material-ui/core/Typography";

export const DseList = props => {
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
                <Typography color="textPrimary">Endpoints</Typography>
            </Breadcrumbs>
            <List {...props} resource={`/admin/ds/dse/${dsId}`}  actions={<ListActions/>}>
                <Datagrid rowClick="edit">
                    <TextField source="title"/>
                </Datagrid>
            </List>
        </div>
    )
}

const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);