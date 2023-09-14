const userDetailsConfig = {
    "api": {
        "uri": `https://twitter154.p.rapidapi.com/user/details?username=`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": '557f8825d3msh9b087f237ca65b1p174192jsnce6f9780e710',
            "X-RapidAPI-Host": 'twitter154.p.rapidapi.com'
        }
    }
}
async function getUserDetails(username) {
    const url = `${userDetailsConfig.api.uri}${username}`;
    console.log(url);
    const options = {
        method: userDetailsConfig.api.method,
        headers: userDetailsConfig.api.headers
    };
    const response = await fetch(url, options);
    return addClientGeneratedProperties(await response.json());
};
function addClientGeneratedProperties(data) {
    data.twitter_link = `https://twitter.com/${data.username}`;
    return data;
}