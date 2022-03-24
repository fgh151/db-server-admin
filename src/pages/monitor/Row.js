import React from 'react';
import MonitorTable from "./MonitorTable";

const Row = (props) => {
    return (
        <tr>
            <td>
                {Array.isArray(props.item) ? <MonitorTable items={props.item}/> : JSON.stringify(props.item)}
            </td>
        </tr>
    );
}

export default Row;