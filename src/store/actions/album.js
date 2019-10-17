import {FETCH_ALBUMS} from "./types";

export const fetchAlbums = () => {
    console.log("resssssssssss");
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("http://167.71.231.3/api/albums", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_ALBUMS,
                    value: res
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};


