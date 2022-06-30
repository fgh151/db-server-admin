import * as React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import authProvider from "../../authProvider";
import {useEffect} from "react";


const OAuth = () => {

    const {provider} = useParams();
    const navigate = useNavigate();

    const query = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    useEffect(() => {
        authProvider.oauth({"provider": provider, "code": query.code})
            .then(() => {
                console.log('true')
                navigate("/", {replace: true});
            })
    }, []);

    return('')
}

export default OAuth