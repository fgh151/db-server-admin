import * as React from "react";
import {List, Datagrid, TextField, FunctionField, EditButton} from 'react-admin';
import {Link} from "react-router-dom";
import ListIcon from '@material-ui/icons/List';

export const CfList = props => {
    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>
            <FunctionField render={(p) => {
                return (
                    <Link
                        className='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root css-1or4sgo-MuiButtonBase-root-MuiButton-root-RaButton-root'
                        to={`/log/cf/${p.id}`} title="fff"
                    >
                       <ListIcon /> logs
                    </Link>
                )
            }}/>
            <EditButton/>
        </Datagrid>
    </List>);
}