import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title, Loading} from 'react-admin';
import Db from "./db";
import MonitorTable from "./MonitorTable";

const Monitor = () => {

    const db = new Db(window._env_.REACT_APP_SERVER_SCHEMA, window._env_.REACT_APP_SERVER_URL, 'logbook', 123)
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    const fetchData = () => {

        db.list()
            .then((response) => {

                response.json()
                    .then((j) => {
                        setList(j)
                        setLoading(false)
                    })
            })
    }

    return (
        <Card>
            <Title title="Monitor"/>
            <CardContent>
                {loading ?
                    <Loading loadingPrimary="app.page.loading" loadingSecondary="app.message.loading"/>
                    : <MonitorTable items={list}/>}
            </CardContent>
        </Card>
    );
};

export default Monitor;