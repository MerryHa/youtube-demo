import React, { Component } from 'react';
import styles from '../SearchVideo/searchVideo.module.css';
import * as config from '../../../config';

let datas = {};
class SearchVideo extends Component {
    state = {
        datas: {
            videoId: this.props.data.id.videoId,
            channelId: this.props.data.snippet.channelId,
            channelName: this.props.data.snippet.channelTitle,
            channelImg: '',
            description: this.props.data.snippet.description,
            videoTitle: this.props.data.snippet.title,
            date: this.props.data.snippet.publishTime,
            videoThumbnail: this.props.data.snippet.thumbnails.high.url,
            viewCount: '',
            subscriber: '',
            like: '',
            dislike: '',
            comment: '',
            tags: '',
        },
        input: this.props.input

    }
    componentDidMount() {
        config.fetchVideoData(this.state.datas.videoId, this.setVideoInfo);
        config.fetchChannelData(this.state.datas.channelId, this.setChannelInfo);
    }
    setVideoInfo = (data) => {
        datas = {
            ...this.state.datas,
            viewCount: data.statistics.viewCount,
            like: data.statistics.likeCount,
            dislike: data.statistics.dislikeCount,
            comment: data.statistics.commentCount,
            tags: data.snippet.tags,
        }
    }
    setChannelInfo = (data) => {
        datas = {
            ...datas,
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
                <div className={styles.infoBox}>
                    <p className={styles.videoTitle}>{this.state.datas.videoTitle}</p>
                    <p className={styles.viewCountAndDate}>{`${config.countConverter(this.state.datas.viewCount)}회`}
                        <span className={styles.date}>{config.agoConverter(this.state.datas.date)}</span>
                    </p>
                    <div className={styles.channel}>
                        <img src={this.state.datas.channelImg} alt="channel" className={styles.channelImg} />
                        <p className={styles.channelName}>{this.state.datas.channelName}</p>
                    </div>
                    <p className={styles.description}>{this.state.datas.description}</p>
                </div>
            </div>
        );
    }
}

export default SearchVideo;

