export const PAGES = {
    mostPopular: 'mostPopular',
    searchPage: 'searchPage',
    playPage: 'playPage'
}

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const api_key = 'AIzaSyBT1w7LThESd2yJkNQ-FCb-RS5EDgBN2kc';
//AIzaSyBT1w7LThESd2yJkNQ-FCb-RS5EDgBN2kc
//AIzaSyBlf1seqlVFFuDgqIctqPGiA4xKlNyv2Mg

export async function getMostPopular(callback) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=2&key=${api_key}`;
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items))
        .catch(error => console.log('error', error));
}

export async function getSearchResult(callback, query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=2&q=${query}&key=${api_key}`;
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items))
        .catch(error => console.log('error', error));
}

export async function getRcmData(callback, videoId) {
    const url = `https://www.googleapis.com/youtube/v3/search?&part=snippet&type=video&relatedVideoId=${videoId}&maxResults=2&key=${api_key}`;
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items))
        .catch(error => console.log('error', error));
}


export async function fetchVideoData(videoId, callback) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${api_key}`;
    await fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items[0]))
        .catch(error => console.log('error', error));
}
export async function fetchChannelData(channelId, callback) {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${api_key}`;
    await fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items[0]))
        .catch(error => console.log('error', error));
}