import * as React from "react";
import {List, Datagrid, TextField, FunctionField, EditButton} from 'react-admin';
import {Link} from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const DataButton = (params) => {
    return (
        <Link
            className='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root css-1or4sgo-MuiButtonBase-root-MuiButton-root-RaButton-root'
            to={`/topic/data/${params.topic}/${params.name}`} title="fff"
        >
            <FormatListBulletedIcon/> Data
        </Link>
    )
}

export const TopicsList = props => {
    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="topic"/>
            <TextField source="key"/>

            <FunctionField render={(p) => {
                return <DataButton topic={p.id} name={p.topic}/>
            }}/>
            <EditButton/>

        </Datagrid>
    </List>);
}