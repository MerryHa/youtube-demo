import React, { Component } from 'react';
import styles from '../SearchVideo/searchVideo.module.css';
import * as config from '../../../config';
let datas = {};

class SearchVideo extends Component {
    state = {
        datas: {
            videoId: this.props.data.id.videoId,
            channelId: this.props.data.snippet.channelId,
            channelName: '',
            channelImg: '',
            description: '',
            vedioTitle: '',
            date: '',
            videoThumbnail: '',
            viewCount: '',
            subscriber: '',
            like: '',
            dislike: '',
            comment: '',
            viewOriginal: '',
        }

    }
    componentDidMount = () => {
        config.getVideoInfo(this.setVideoInfo, this.setChannelInfo, this.state.datas.videoId, this.state.datas.channelId);
    }

    setVideoInfo = (data) => {
        let elapsedTime = dateConverter(data.snippet.publishedAt);
        let viewCount = viewCountConverter(data.statistics.viewCount);
        datas = {
            ...this.state.datas,
            description: data.snippet.description,
            vedioTitle: data.snippet.title,
            date: elapsedTime,
            videoThumbnail: data.snippet.thumbnails.maxres.url,
            viewCount: viewCount,
            like: data.statistics.likeCount,
            dislike: data.statistics.dislikeCount,
            comment: data.statistics.commentCount,
            viewOriginal: data.statistics.viewCount,
        }

    }
    setChannelInfo = (data) => {
        datas = {
            ...datas, channelName: data.snippet.title,
            channelImg: data.snippet.thumbnails.default.url,
            subscriber: data.statistics.subscriberCount
        }
        this.setState({ datas });
    }

    render() {
        return (
            <div className={styles.video}>
                <img src={this.state.datas.videoThumbnail} className={styles.videoThumbnail} alt='thumbnail'></img>
                <div className={styles.infoBox}>
                    <p className={styles.videoTitle}>{this.state.datas.vedioTitle}</p>
                    <p className={styles.viewCountAndDate}>{this.state.datas.viewCount}
                        <span className={styles.date}>{this.state.datas.date}</span>
                    </p>
                    <div className={styles.channel}>
                        <img src={this.state.datas.channelImg} alt="channelImage" className={styles.channelImg} />
                        <p className={styles.channelName}>{this.state.datas.channelName}</p>
                    </div>
                    <p className={styles.description}>{this.state.datas.description}</p>
                </div>
            </div>
        );
    }
}

export default SearchVideo;
function viewCountConverter(viewCount) {
    let result;
    if (viewCount < 10000) {
        result = `${viewCount}회`;
    } else if (viewCount < 100000000) {
        result = `${Math.floor(viewCount / 10000)}만회`;
    } else {
        result = `${Math.floor(viewCount / 100000000)}억회`;
    }
    return result;
}

function dateConverter(dateString) {
    const publishedDate = new Date(dateString);
    const currentDate = new Date;
    console.log()
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