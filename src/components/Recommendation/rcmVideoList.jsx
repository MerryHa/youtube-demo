import React, { Component } from 'react';
import * as config from '../../config';
import RcmVideo from './RcmVideo/rcmVideo';
class RcmVideoList extends Component {
    state = {
        currentPage: this.props.currentPage,
        currentId: this.props.currentId,
        datas: [],
    }
    componentDidMount = () => {
        config.getRcmData(this.setDatas, this.state.currentId);
    }
    setDatas = (array) => {
        const datas = [...array];
        this.setState({ datas });
    }
    render() {
        return (
            <>
                {
                    this.state.datas.map(data => {
                        return (
                            <RcmVideo
                                data={data}
                                key={Date.now() * Math.random()}
                                onClickVideo={this.props.onClickVideo}
                            />
                        );
                    })
                }
            </>
        );


    }
}

export default RcmVideoList;