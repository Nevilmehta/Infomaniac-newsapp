import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "General"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles: [],
      // for particular articles or news create articles array and put this.articles in above array
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - Infomaniac`;
  }

  async updateNews(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f99e64fef2284b2e87f2aa09a002ee17&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // eslint-disable-next-line
    this.setState({loading: false});
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: parsedData.articles, 
          totalResults: parsedData.totalResults, 
          loading: false  })
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async ()=>{
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1});
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f99e64fef2284b2e87f2aa09a002ee17&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: this.state.articles.concat(parsedData.articles), 
          totalResults: parsedData.totalResults
        })
  };
  
  render() {
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px'}}>News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index)=>{
                return <div className="col-md-4" key={index}>
                        <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div> 
              })}  
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
