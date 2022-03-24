import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title, Loading} from 'react-admin';
import Db from "./db";

const Monitor = () => {


    const db = new Db('http', 'localhost:9090', 'test', 123)
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    const fetchData = () => {

        db.list()
            .then((response) => {
                setList(response.body)
                setLoading(false)
            })

    }


    return (
        <Card>
            <Title title="Monitor"/>
            <CardContent>
                {loading ?
                    <Loading loadingPrimary="app.page.loading" loadingSecondary="app.message.loading"/>
                    : <div> loaded {list} </div>}
            </CardContent>
        </Card>
    );
};

export default Monitor;