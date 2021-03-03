import React, { Component } from 'react';
import './app.css';
import Header from './components/Header/header';
import PopularVideoList from './components/MostPopular/popularVideoList';
import PlayScreen from './components/PlayScreen/playScreen';
import SearchVideoList from './components/SearchVideoList/searchVideoList';
import Sidebar from './components/Sidebar/sidebar';
import * as config from './config';

class App extends Component {
  state = {
    currentPage: config.PAGES.mostPopular,
    input: '',
    playData: {},
  }
  handleSearch = (value) => {
    this.setState({ ...this.state, currentPage: config.PAGES.searchPage, input: value });
  };
  handleVideoClick = (datas) => {
    const playData = datas;
    this.setState({ currentPage: config.PAGES.playPage, playData });
  }
  handleLogoClick = () => {
    this.setState({ currentPage: config.PAGES.mostPopular });
  }
  render() {
    if (this.state.currentPage === config.PAGES.mostPopular) {
      return (
        <>
          <Header youtubeSearch={this.handleSearch} onLogoClick={this.handleLogoClick} />
          <div className='main'>
            <Sidebar />
            <PopularVideoList currentPage={this.state.currentPage} onClickVideo={this.handleVideoClick} />
          </div>
        </>
      );
    } else if (this.state.currentPage === config.PAGES.searchPage) {
      return (
        <>
          <Header youtubeSearch={this.handleSearch} onLogoClick={this.handleLogoClick} />
          <div className='main'>
            <Sidebar />
            <SearchVideoList
              input={this.state.input}
              currentPage={this.state.currentPage} onClickVideo={this.handleVideoClick} />
          </div>
        </>
      );
    } else if (this.state.currentPage === config.PAGES.playPage) {
      return (
        <>
          <Header youtubeSearch={this.handleSearch} onLogoClick={this.handleLogoClick} />
          <PlayScreen
            key={Date.now() * Math.random()}
            input={this.state.input}
            currentPage={this.state.currentPage}
            playData={this.state.playData}
            onClickVideo={this.handleVideoClick} />
        </>
      )
    }
  }

}

export default App;
