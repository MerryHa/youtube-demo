import React, { Component } from 'react';
import * as config from '../../../config';
import styles from '../RcmVideo/rcmVideo.module.css'


class RcmVideo extends Component {
    state = {
        datas: {
            videoId: this.props.data.id.videoId,
            channelId: this.props.data.snippet.channelId,
            channelName: this.props.data.snippet.channelTitle,
            channelImg: this.props.data.snippet.thumbnails.default.url,
            description: this.props.data.snippet.description,
            videoTitle: this.props.data.snippet.title,
            date: this.props.data.snippet.publishedAt,
            videoThumbnail: '',
            viewCount: '',
            subscriber: '',
            like: '',
            dislike: '',
            comment: '',
            tags: '',
        }

    }
    componentDidMount = () => {
        config.fetchVideoData(this.state.datas.videoId, this.setVideoInfo);
        config.fetchChannelData(this.state.datas.channelId, this.setChannelInfo);
    }

    setVideoInfo = (data) => {
        const datas = {
            ...this.state.datas,
            videoThumbnail: data.snippet.thumbnails.maxres.url,
            viewCount: data.statistics.viewCount,
            like: data.statistics.likeCount,
            dislike: data.statistics.dislikeCount,
            comment: data.statistics.commentCount,
            tags: data.snippet.tags,
        }
        this.setState({ datas });
    }
    setChannelInfo = (data) => {
        const datas = {
            ...this.state.datas,
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
                <img src={this.state.datas.videoThumbnail} className={styles.videoThumbnail} alt='thumbnail'></img>
                <div className={styles.infoBox}>
                    <p className={styles.videoTitle}>{this.state.datas.videoTitle}</p>
                    <p className={styles.channelName}>{this.state.datas.channelName}</p>
                    <p className={styles.viewCountAndDate}>{`조회수 ${config.countConverter(this.state.datas.viewCount)}회 • ${config.agoConverter(this.state.datas.date)}`}
                    </p>
                </div>
            </div>
        );
    }
}

export default RcmVideo;