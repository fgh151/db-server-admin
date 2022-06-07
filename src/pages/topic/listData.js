import * as React from "react";
import {List, Datagrid, TextField, FunctionField} from 'react-admin';
import {useParams} from "react-router-dom"
import {Breadcrumbs} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from '@mui/material/Link';
import ReactJson from "react-json-view";

export const ListData = props => {
    const {id} = useParams();
    const {name} = useParams();
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href='/#/admin/topics/'>
                    Topics
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href={`/#/admin/topics/${id}`}
                >
                    {id}
                </Link>
                <Typography color="textPrimary">data</Typography>
            </Breadcrumbs>
            <List {...props} resource={`/admin/topics/${name}/data`}>
                <Datagrid>
                    <FunctionField label="data" render={(p) => {
                        return <ReactJson src={p} />
                    }}/>
                </Datagrid>
            </List>
        </div>
    );
}