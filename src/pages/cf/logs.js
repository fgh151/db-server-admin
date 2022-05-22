import * as React from "react";
import {List, Datagrid, TextField} from 'react-admin';
import {useParams} from "react-router-dom"
import {Breadcrumbs} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from '@mui/material/Link';


export const LogList = props => {

    const {id} = useParams();

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href='/admin/cf/'>
                    Functions
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href={`/admin/cf/${id}`}
                >
                    {id}
                </Link>
                <Typography color="text.primary">Logs</Typography>
            </Breadcrumbs>
            <List {...props} resource={`/admin/cf/${id}/log`}>
                <Datagrid>
                    <TextField source="run_at"/>
                    <TextField source="result"/>
                </Datagrid>
            </List>
        </div>
    );
}