import {FETCH_HOMEBANNER} from "./types";

export const fetchHomeBanner = () => {
    return dispatch => {
        fetch("http://167.71.231.3/api/banners", {
            method: "POST"
        })
            .then(res => res.json())
            .then(res => {
                //console.log("response", res.result[0]);
                
                dispatch({
                    type: FETCH_HOMEBANNER,
                    value: res.result[0]
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};


