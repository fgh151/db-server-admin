import {UnControlled as Editor} from 'react-codemirror2'
import {useRecordContext} from "ra-core";
import get from 'lodash/get';
import * as React from "react";

import 'codemirror/lib/codemirror.css'
import "codemirror/theme/material.css";
import 'codemirror/mode/javascript/javascript'
import Typography from "@material-ui/core/Typography";
import {sanitizeFieldRestProps} from "react-admin";
import {useState} from "react";

const CodeMirror = (props) => {

    const {className, source, emptyText, ...rest} = props;
    const record = useRecordContext(props);
    const value = get(record, source);
    const [val, setVal] = useState(value);

    return (
        <Typography
            component="span"
            variant="body2"
            className={className}
            {...sanitizeFieldRestProps(rest)}
        >
            <input type='hidden' name={props.name} value={val}/>
            <Editor
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
                    setVal(value)
                }}
            />
        </Typography>
    )
}

export default CodeMirror;