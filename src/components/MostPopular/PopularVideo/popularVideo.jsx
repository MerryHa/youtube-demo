import React, { Component } from 'react';
import styles from '../PopularVideo/popularVideo.module.css';
import * as config from '../../../config';
class PopularVideo extends Component {
    state = {
        datas: {
            videoId: this.props.data.id,
            channelId: this.props.data.snippet.channelId,
            channelName: this.props.data.snippet.channelTitle,
            channelImg: '',
            description: this.props.data.snippet.description,
            videoTitle: this.props.data.snippet.title,
            date: this.props.data.snippet.publishedAt,
            videoThumbnail: this.props.data.snippet.thumbnails.standard.url,
            viewCount: this.props.data.statistics.viewCount,
            subscriber: '',
            like: this.props.data.statistics.likeCount,
            dislike: this.props.data.statistics.dislikeCount,
            comment: this.props.data.statistics.commentCount,
            tags: this.props.data.snippet.tags,
        }
    }
    componentDidMount = () => {
        config.fetchChannelData(this.state.datas.channelId, this.setChannelInfo)
    }
    setChannelInfo = (data) => {
        const datas = {
            ...this.state.datas,
            channelImg: data.snippet.thumbnails.default.url,
            subscriber: data.statistics.subscriberCount
        }
        this.setState({ datas });
    }
    handlePlay = () => {
        const playData = { ...this.state.datas };
        this.props.onClickVideo(playData);
    }

    render() {
        return (
            <div className={styles.video} onClick={this.handlePlay}>
                <img src={this.state.datas.videoThumbnail} className={styles.videoThumbnail}></img>
                <div className={styles.description}>
                    <img src={this.state.datas.channelImg} className={styles.channelImg} />
                    <div className={styles.infoBox}>
                        <p className={styles.videoTitle}>{this.state.datas.videoTitle}</p>
                        <p className={styles.channelName}>{this.state.datas.channelName}</p>
                        <p className={styles.viewCountAndDate}>{`${countConverter(this.state.datas.viewCount)}회`}
                            <span className={styles.date}>{dateConverter(this.state.datas.date)}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularVideo;

function countConverter(count) {
    let result;
    if (count < 1000) {
        result = count;
    } else if (count < 10000) {
        result = `${count / 1000}천`;
    } else if (count < 100000000) {
        result = `${Math.floor(count / 10000)}만`;
    } else {
        result = `${Math.floor(count / 100000000)}억`;
    }
    return result;
}


function dateConverter(dateString) {
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