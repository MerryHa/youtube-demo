import React, { Component } from 'react';
import styles from '../PlayScreen/playScreen.module.css';


class PlayScreen extends Component {
    state = {
        datas: {
            videoId: this.props.playData.videoId,
            channelId: this.props.playData.channelId,
            channelName: this.props.playData.channelName,
            channelImg: this.props.playData.channelImg,
            description: this.props.playData.description,
            videoTitle: this.props.playData.videoTitle,
            date: this.props.playData.date,
            videoThumbnail: this.props.playData.videoThumbnail,
            viewCount: this.props.playData.viewCount,
            subscriber: `${countConverter(this.props.playData.subscriber)}명`,
            like: `${countConverter(this.props.playData.like)}`,
            dislike: `${countConverter(this.props.playData.dislike)}`,
            comment: this.props.playData.comment,
        },
        input: this.props.input,
        currentPage: this.props.currentPage,
        // more: false,
        // moreToggle: '더보기',
    }
    // handleMoreClick = () => {
    //     if (this.state.more) {
    //         this.setState({ more: !this.state.more, moreToggle: '줄이기' });
    //     } else {
    //         this.setState({ more: !this.state.more, moreToggle: '더보기' });
    //     }
    // }
    render() {
        return (
            <>
                <iframe
                    src={`https://www.youtube.com/embed/${this.state.datas.videoId}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                <div className={styles.container}>
                    <div className={styles.videoContainer}>
                        <h2 className={styles.title}>{this.state.datas.videoTitle}</h2>
                        <div className={styles.viewInfo}>
                            <p className={styles.viewCountAndDate}>{
                                `조회수 ${numberWithCommas(this.state.datas.viewCount)}회 • `
                            }<span className={styles.date}>{dateConverter(this.state.datas.date)}</span>
                            </p>
                            <div className={styles.btnContainer}>
                                <button><i className="fas fa-thumbs-up"></i>{this.state.datas.like}</button>
                                <button><i className="fas fa-thumbs-down"></i>{this.state.datas.dislike}</button>
                                <button><i className="fas fa-share"></i>공유</button>
                                <button><i className="fas fa-folder-plus"></i>저장</button>
                                <button>…</button>
                            </div>
                        </div>
                        <div className={styles.channelContainer}>
                            <div className={styles.channelStart}>
                                <img src={this.state.datas.channelImg} alt="Channel" className={styles.channelImg} />
                                <div className="channelInfo">
                                    <h4 className={styles.channelName}>{this.state.datas.channelName}</h4>
                                    <div className={styles.subscribers}>{this.state.datas.subscriber}</div>
                                </div>
                            </div>
                            <div className="channelEnd">
                                <button className={styles.subscribe}>구독</button>
                                <button className={styles.alarm}><i className="far fa-bell"></i></button>
                            </div>

                        </div>
                        <p className={styles.notMore}>
                            {this.state.datas.description}
                            <button className={styles.moreBtn}>{this.state.moreToggle}</button>
                        </p>
                    </div>
                    <div className={styles.recommendation}>

                    </div>
                </div>

            </>
        );
    }
}

export default PlayScreen;

function countConverter(count) {
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
function dateConverter(publishedAt) {
    const before = new Date(publishedAt);
    const year = before.getFullYear();
    const month = before.getMonth();
    const date = before.getDate();
    return `${year}. ${month}. ${date}.`;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

