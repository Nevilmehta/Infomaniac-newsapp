import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "General"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(){
    super();
    this.state={
      articles: [],
      // for particular articles or news create articles array and put this.articles in above array
      loading: false,
      page: 1
    }
  }

  async updateNews(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f99e64fef2284b2e87f2aa09a002ee17&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // eslint-disable-next-line
    this.setState({loading: true});
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
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '35px 0px'}}>News - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                 </div> 
        })}  
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
