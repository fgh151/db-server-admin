import * as React from "react";
import {Datagrid, EditButton, FunctionField, List, TextField} from 'react-admin';
import {Button} from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {dataProvider,} from "../../utils/http";
import moment from "moment";

const RunButton = (params) => {

    const runAction = () => {
        dataProvider.runPush(params.push.id)
    }

    return (
        <Button
            className='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root css-1or4sgo-MuiButtonBase-root-MuiButton-root-RaButton-root'
            onClick={() => runAction()}
        >
            <PlayCircleOutlineIcon/> Send
        </Button>
    )
}

export const PushList = props => {

    return (<List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>

            <FunctionField render={(p) => {
                console.log(p)

                const format = moment(p.sent_at).format('DD-MM-YYYY')

                return p.sent ? <div>Sent ({format})</div> : <RunButton push={p}/>
            }}/>

            <EditButton/>
        </Datagrid>
    </List>);
}