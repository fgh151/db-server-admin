import {UnControlled as CM} from 'react-codemirror2'
import {useRecordContext} from "ra-core";
import get from 'lodash/get';
import * as React from "react";

import 'codemirror/lib/codemirror.css'
import "codemirror/theme/material.css";
import 'codemirror/mode/javascript/javascript'
import Typography from "@material-ui/core/Typography";
import {sanitizeFieldRestProps} from "react-admin";

const CodeMirror = (props) => {

    const {className, source, emptyText, ...rest} = props;
    const record = useRecordContext(props);
    const value = get(record, source);

    return (
        <Typography
            component="span"
            variant="body2"
            className={className}
            {...sanitizeFieldRestProps(rest)}
        >
            <CM
                value={JSON.stringify(JSON.parse(value), null, 2)}
                options={{
                    theme: "default",
                    height: "auto",
                    viewportMargin: Infinity,
                    mode: {
                        name: "javascript",
                        json: true,
                        statementIndent: 2
                    },
                    lineNumbers: true,
                    lineWrapping: true,
                    indentWithTabs: false,
                    tabSize: 2
                }}
                onChange={(editor, data, value) => {
                }}
            />
        </Typography>
    )
}

export default CodeMirror;