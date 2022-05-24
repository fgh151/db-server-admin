import * as React from "react";
import {List, Datagrid, TextField, FunctionField, EditButton} from 'react-admin';
import {Link} from "react-router-dom";
import ListIcon from '@material-ui/icons/List';
import {Button} from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons//PlayCircleOutline';
import {request} from "../../utils/http";

const RunButton = (params) => {

    const runAction = () => {
        request.runCf(params.functionId)
    }

    return (
        <Button
            className='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root css-1or4sgo-MuiButtonBase-root-MuiButton-root-RaButton-root'
            onClick={() => runAction()}
        >
            <PlayCircleOutlineIcon/> Run
        </Button>
    )
}

export const CfList = props => {

    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>

            <FunctionField render={(p) => {
                return (
                    <RunButton functionId={p.id}/>
                )
            }}/>

            <FunctionField render={(p) => {
                return (
                    <Link
                        className='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root css-1or4sgo-MuiButtonBase-root-MuiButton-root-RaButton-root'
                        to={`/log/cf/${p.id}`} title="fff"
                    >
                        <ListIcon/> logs
                    </Link>
                )
            }}/>
            <EditButton/>
        </Datagrid>
    </List>);
}