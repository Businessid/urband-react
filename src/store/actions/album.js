import {FETCH_ALBUMS, FETCH_ALBUMSDETAILS} from "./types";

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
                console.log("resultttt", res);
                
                dispatch({
                    type: FETCH_ALBUMS,
                    value: res.result
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};

export const fetchAlbumsDetails = (id) => {
    console.log("resssssssssss");
    return dispatch => {
        const body = {
            albumid: id
        };
        fetch("http://127.0.0.1:8000/api/albumdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_ALBUMSDETAILS,
                    value: res
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};

