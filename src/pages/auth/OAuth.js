import * as React from 'react';
import {useParams, useLocation} from "react-router-dom";
import authProvider from "../../authProvider";



const OAuth = (props) => {


    const {provider} = useParams();

    const query =  new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

    authProvider.oauth({"provider" : provider, "code": query.code})


    return (
        <div> github</div>
    )

}

export default OAuth