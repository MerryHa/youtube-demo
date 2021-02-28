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
                        <p className={styles.viewCountAndDate}>{`${config.countConverter(this.state.datas.viewCount)}회`}
                            <span className={styles.date}>{config.agoConverter(this.state.datas.date)}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularVideo;
