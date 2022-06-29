import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title, Loading} from 'react-admin';
import {httpClient, apiUrl} from "../../utils/http"
import Row from "./Row";

const Monitor = () => {

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    const fetchData = () => {

        if (loading) {
            httpClient(`${apiUrl}/admin/projects?_end=10&_order=ASC&_sort=id&_start=0`, {method: 'GET'})
                .then((response) => {
                    const l = JSON.parse(response.body);
                    setList(l)
                    setLoading(false)
                });
        }
    }

    return (
        <Card>
            <Title title="Monitor"/>
            <CardContent>
                {loading ?
                    <Loading loadingPrimary="app.page.loading" loadingSecondary="app.message.loading"/>
                    : list.map((item, i) => <Row key={i} item={item}/>)}
            </CardContent>
        </Card>
    );
};

export default Monitor;