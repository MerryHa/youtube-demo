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
    componentDidUpdate() {
        if (this.props.input !== this.state.input) {
            config.getSearchResult(this.setDatas, this.props.input);
            console.log('vidieo list update');
        }
    }

    setDatas = (items) => {
        const datas = [...items];
        this.setState({ datas, input: this.props.input });
        console.log(this.state);
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
                                input={this.props.input}
                            />
                        )
                    })
                }
            </div>

        );
    }
}

export default SearchVideoList;