import React, {useEffect, useState} from 'react';
import {Accordion, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {httpClient, apiUrl} from "../../utils/http"
import {Loading} from "react-admin";
import ReactJson from "react-json-view";

const Row = (props) => {

    const [content, setContent] = useState(true);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setLoaded(false)
    }, [])

    const fetchContent =(event, expanded) => {
        if (expanded && loaded === false) {
            httpClient(`${apiUrl}/admin/em/list/${props.item.topic}?_end=10&_order=ASC&_sort=id&_start=0`, {method: 'GET'})
                .then((response) => {

                    if (response.status === 200 ) {
                        setContent(JSON.parse(response.body));
                        setLoaded(true);
                    }
                })
        }
    }

    return (
        <Accordion onChange={fetchContent}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography sx={{paddingX:10, flexShrink: 0}}>
                    <b>{props.item.topic}</b>
                </Typography>
                <Typography sx={{color: 'text.secondary'}}>
                    {props.item.id}
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    { loaded ?  <ReactJson src={content} /> : <Loading loadingPrimary="app.page.loading" loadingSecondary="app.message.loading"/>}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default Row;