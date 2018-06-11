import * as axios from 'axios';

const BASE_URL = 'http://localhost:8000';

function upload(formData) {
    const url = `${BASE_URL}/contents/model/upload`;
    return axios.post(url, formData)
        // get data
        .then((result) => {
            return result.data;
        });
}

export { upload }