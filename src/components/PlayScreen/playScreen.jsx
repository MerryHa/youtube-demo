import React, { Component } from 'react';
import styles from '../PlayScreen/playScreen.module.css';

class PlayScreen extends Component {
    state = {
        datas: {
            videoId: this.props.playData.videoId,
            channelId: this.props.playData.channelId,
            channelName: this.props.playData.channeName,
            channelImg: this.props.playData.channelImg,
            description: this.props.playData.description,
            vedioTitle: this.props.playData.videoTitle,
            date: this.props.playData.date,
            videoThumbnail: this.props.playData.videoThumbnail,
            viewCount: this.props.playData.viewCount,
            subscriber: this.props.playData.subscriber,
            like: this.props.playData.like,
            dislike: this.props.playData.dislike,
            comment: this.props.playData.comment,
            viewOriginal: this.props.playData.viewOriginal,
        },
        class: 'description clamp',
    }
    handleMoreClick = () => {
        if (this.state.className === 'description') {
            this.setState({ class: 'description clamp' });

            return;
        }
        this.setState({ class: 'description' });

    }
    render() {
        let num = this.state.datas.viewOriginal;
        return (
            <div className={styles.playScreen}>
                <div className="videoContainer">
                    <iframe src={this.state.datas.videoId} frameBorder="0"></iframe>
                    <h2 className='title'>{this.state.datas.vedioTitle}</h2>
                    <div className="info">
                        <p className={styles.viewCountAndDate}>{
                            `${num.toLocaleString()}회`
                        }<span className={styles.date}>{this.state.datas.date}</span>
                        </p>
                        <div className='btnContainer'>
                            <button><i className="fas fa-thumbs-up"></i>{this.state.datas.like}</button>
                            <button><i className="fas fa-thumbs-down"></i>{this.state.datas.dislike}</button>
                            <button><i className="fas fa-share"></i></button>
                            <button><i className="fas fa-folder-plus"></i></button>
                            <button>…</button>
                        </div>
                    </div>
                    <div className="aboutChannelAndVideo">
                        <img src={this.state.datas.channelImg} alt="Channel Image" className="channelImg" />
                        <div className="info">
                            <h4 className='channelName'>{this.state.datas.channelName}</h4>
                            <div className="subscribers">26만명</div>
                            <p className={this.state.class} >
                                {this.state.datas.description}
                                <button className='moreBtn' onClick={this.handleMoreClick}>더보기</button>
                            </p>

                        </div>
                        <button className="subscribe">구독</button>
                    </div>
                </div>
                <div className="recommendation">

                </div>
            </div>
        );
    }
}

export default PlayScreen;