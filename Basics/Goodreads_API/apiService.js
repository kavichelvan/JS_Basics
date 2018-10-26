const axios = require('axios');
const xml2js = require('xml2js');
const debug = require('debug')('app:apiService');

const parser = xml2js.Parser({ explicitArray: false });

(async function getThings() {
    axios.get(`https://api.github.com/users/kavichelvan`) //https://www.goodreads.com/book/show/656.xml?key=r5oV4OPffoSbhrmou9GEGA
        .catch((error) => {
            debug(error);
        })
        .then((response) => {
            console.log(response);
            debug(response);
        });
}()
);



