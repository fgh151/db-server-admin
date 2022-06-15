import * as React from "react";
import {Datagrid, EditButton, FunctionField, List, ReferenceField, TextField} from 'react-admin';
import {Link} from "react-router-dom";
import ListIcon from "@material-ui/icons/List";

export const DsList = props => {
    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>
            <ReferenceField label="Project" source="project_id" reference="admin/topics">
                <TextField source="topic"/>
            </ReferenceField>
            <TextField source="type"/>
            <FunctionField render={(p) => {
                return (
                    <Link
                        className='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root css-1or4sgo-MuiButtonBase-root-MuiButton-root-RaButton-root'
                        to={`/admin/ds/dse/${p.id}`} title="Endpoints"
                    >
                        <ListIcon/> Endpoints
                    </Link>
                )
            }}/>

            <EditButton/>
        </Datagrid>
    </List>);
}