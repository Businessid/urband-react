import {FETCH_BANNER} from "./types";

export const fetchBanner = (id) => {
    return dispatch => {
        const body = {
            page: id
        };
        fetch("http://167.71.231.3/api/banners", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                //console.log("response", res.result[0]);
                
                dispatch({
                    type: FETCH_BANNER,
                    value: res.result[0]    
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};


