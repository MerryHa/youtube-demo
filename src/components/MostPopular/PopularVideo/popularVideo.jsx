import React, { Component } from 'react';
import styles from '../PopularVideo/popularVideo.module.css';

class PopularVideo extends Component {
    state = {
        videoId: this.props.data.id,
        channelId: this.props.data.snippet.channelId,
        channelName: this.props.data.snippet.channelTitle,
        description: this.props.data.snippet.description,
        videoTitle: this.props.data.snippet.title,
        date: this.props.data.snippet.publishedAt,
        videoThumbnail: this.props.data.snippet.thumbnails.medium.url,
        viewCount: this.props.data.statistics.viewCount
    }
    render() {
        return (
            <div className={styles.video}>
                <img src={this.state.videoThumbnail} className={styles.videoThumbnail} alt='thumbnail'></img>
                <div className={styles.description}>
                    <img src="/images/channelIMG.png" alt="channel" className={styles.channelImg} />
                    <div className={styles.infoBox}>
                        <p className={styles.videoTitle}>{this.state.videoTitle}</p>
                        <p className={styles.channelName}>{this.state.channelName}</p>
                        <p className={styles.viewCountAndDate}>{this.state.viewCount}
                            <span className={styles.date}>{this.state.date}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularVideo;