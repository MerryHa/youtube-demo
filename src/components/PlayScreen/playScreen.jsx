import React, { Component } from 'react';
import styles from '../PlayScreen/playScreen.module.css';
import RcmVideoList from '../Recommendation/rcmVideoList';
import * as config from '../../config';
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
            subscriber: this.props.playData.subscriber,
            like: this.props.playData.like,
            dislike: this.props.playData.dislike,
            comment: this.props.playData.comment,
            tags: this.props.playData.tags,
        },
        input: this.props.input,
        currentPage: this.props.currentPage,
    }
    render() {
        return (
            <div className={styles.playScreen}>
                <div className={styles.playVideoBox}>
                    <div className={styles.iframeBox}>
                        <iframe
                            src={`https://www.youtube.com/embed/${this.state.datas.videoId}`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder='0'></iframe>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.videoContainer}>
                            <p className={styles.tags}>{config.tagMaker(this.state.datas.tags)}</p>
                            <h2 className={styles.title}>{this.state.datas.videoTitle}</h2>
                            <div className={styles.viewInfo}>
                                <p className={styles.viewCountAndDate}>{
                                    `조회수 ${config.numberWithCommas(this.state.datas.viewCount)}회 • `
                                }<span className={styles.date}>{config.dateConverter(this.state.datas.date)}</span>
                                </p>
                                <div className={styles.btnContainer}>
                                    <button className={styles.btnBold}><i className="fas fa-thumbs-up"></i>{config.countConverter(this.state.datas.viewCount)}</button>
                                    <button className={styles.btnBold}><i className="fas fa-thumbs-down"></i>{config.countConverter(this.state.datas.dislike)}</button>
                                    <button><i className="fas fa-share"></i>공유</button>
                                    <button><i className="fas fa-folder-plus"></i>저장</button>
                                    <button>•••</button>
                                </div>

                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.channelContainer}>
                                <div className={styles.channelStart}>
                                    <img src={this.state.datas.channelImg} alt="Channel" className={styles.channelImg} />
                                    <div className={styles.channelInfo}>
                                        <h4 className={styles.channelName}>{this.state.datas.channelName}</h4>
                                        <div className={styles.subscribers}>구독자 {config.countConverter(this.state.datas.subscriber)}명</div>
                                    </div>
                                </div>
                                <button className={styles.subscribe}>구독</button>

                            </div>
                            <p className={styles.notMore}>
                                {this.state.datas.description}
                            </p>
                            <button className={styles.moreBtn}>더보기</button>
                            <div className={styles.line}></div>
                            <span className={styles.comments1}>댓글 {config.numberWithCommas(this.state.datas.comment)}개</span>
                        </div>
                    </div>
                </div>
                <div className={styles.recommendation}>
                    <RcmVideoList currentId={this.state.datas.videoId} currentPage={this.state.currentPage}
                        onClickVideo={this.props.onClickVideo} />
                </div>
                <span className={styles.comments2}>댓글 {config.numberWithCommas(this.state.datas.comment)}개</span>


            </div>
        );
    }
}

export default PlayScreen;


