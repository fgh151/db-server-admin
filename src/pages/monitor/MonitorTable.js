import React from 'react';
import Row from "./Row";

const MonitorTable = (props) => {
    return (
        <table>
            <tbody>
            {props.items.map((item, i) => <Row key={i} item={item}/>)}

            </tbody>
        </table>
    );
}

export default MonitorTable;