const request = async (url, options) => {
    try {
        const response = await fetch(url, options);

        if (response.ok) {
            try {
                return await response.json();
            } catch (err) {
                return await response;
            }
        } else {
            const result = await response.json();
            throw new Error(result.message);
        }

    } catch (err) {
        console.log(err.message);
        throw new Error(err.message);
    }


}

const getOptions = (method='GET', body ) => {

    const options = {
        method,
        headers: {}
    }

    let token  =  null;

    try {
       const user = localStorage.getItem('user');

       if(user) {
           token = JSON.parse(user).accessToken
       }
    } catch(err) {
        return err;
    }

    if(token) {
        options.headers['X-Authorization'] = token;
    }

    if(body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;

}

export const get = async (url) => await request(url, getOptions());

export const post = async (url, data) => await request(url, getOptions('POST', data));

export const put = async (url, data) => await request(url, getOptions('PUT', data));

export const deleteItem = async (url) => await  request(url, getOptions('DELETE'));
