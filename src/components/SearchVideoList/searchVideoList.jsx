import React, { Component } from 'react';
import * as config from "../../config";
import styles from '../SearchVideoList/searchVideoList.module.css';
import SearchVideo from './SearchVideo/searchVideo';
class SearchVideoList extends Component {
    state = {
        currentPage: this.props.currentPage,
        input: this.props.input,
        datas: [],
    }
    componentDidMount() {
        config.getSearchResult(this.setDatas, this.state.input);
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
                            <SearchVideo
                                key={Date.now() * Math.random()}
                                data={data}
                                onClickVideo={this.props.onClickVideo}
                            />
                        )
                    })
                }
            </div>

        );
    }
}

export default SearchVideoList;