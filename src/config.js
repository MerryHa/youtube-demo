import dotenv from "dotenv";

export const PAGES = {
    mostPopular: 'mostPopular',
    searchPage: 'searchPage',
    playPage: 'playPage'
}

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

dotenv.config();
const api_key = process.env.REACT_APP_YOUTUBE_API_KEY1;

export async function getMostPopular(callback) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=24&key=${api_key}`;
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items))
        .catch(error => console.log('error', error));
}

export async function getSearchResult(callback, query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&type=video&maxResults=10&q=${query}&key=${api_key}`;
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => callback(json.items))
        .catch(error => console.log('error', error));
}

export async function getRcmData(callback, videoId) {
    const url = `https://www.googleapis.com/youtube/v3/search?&part=snippet&type=video&relatedVideoId=${videoId}&maxResults=5&key=${api_key}`;
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
//----------------------- Common functions ------------------------------------
export function countConverter(count) {
    let result;
    if (count < 1000) {
        result = count;
    } else if (count < 10000) {
        const num = count / 1000;
        result = `${num.toFixed(1)}천`;
    } else if (count < 100000) {
        const num = count / 10000;
        result = `${num.toFixed(1)}만`;
    } else if (count < 100000000) {
        result = `${Math.floor(count / 10000)}만`;
    } else {
        result = `${Math.floor(count / 100000000)}억`;
    }
    return result;
}

export function agoConverter(dateString) {
    const publishedDate = new Date(dateString);
    const currentDate = new Date;
    const seconds = (currentDate.getTime() - publishedDate.getTime()) / 1000;
    let result;
    if (seconds < 60) {
        result = `${seconds}초 전`;
    } else if (seconds < 3600) {
        result = `${Math.floor(seconds / 60)}분 전`;
    } else if (seconds < 86400) {
        result = `${Math.floor(seconds / 3600)}시간 전`;
    } else if (seconds < 604800) {
        result = `${Math.floor(seconds / 86400)}일 전`;
    } else if (seconds < 2592000) {
        result = `${Math.floor(seconds / 604800)}주 전`;
    } else if (seconds < 31536000) {
        result = `${Math.floor(seconds / 2592000)}달 전`;
    } else {
        result = `${Math.floor(seconds / 31536000)}년 전`;
    }
    return result;
}
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function dateConverter(publishedAt) {
    const before = new Date(publishedAt);
    const year = before.getFullYear();
    const month = before.getMonth();
    const date = before.getDate();
    return `${year}. ${month}. ${date}.`;
}
export function tagMaker(tags) {
    let result = '';
    let i = 0;
    while (i < 3) {
        result += `#${tags[i]} `;
        i++;
    }
    return result;
}