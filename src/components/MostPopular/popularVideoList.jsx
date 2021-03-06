import React, { Component } from 'react';
import styles from '../MostPopular/popularVideoList.module.css';
import * as config from "../../config";
import PopularVideo from './PopularVideo/popularVideo';

class PopularVideoList extends Component {
    state = {
        currentPage: this.props.currentPage,
        datas: [],
    }
    componentDidMount = () => {
        config.getMostPopular(this.setDatas);
    }
    setDatas = (items) => {
        const datas = [...items];
        this.setState({ datas });
    }

    render() {
        return (
            <div className={styles.playlist}>
                {
                    this.state.datas.map(data => {
                        return (
                            <PopularVideo
                                key={Date.now() * Math.random()}
                                onClickVideo={this.props.onClickVideo}
                                data={data}
                            />
                        )
                    })
                }
            </div>

        );
    }
}

export default PopularVideoList;