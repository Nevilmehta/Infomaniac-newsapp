import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state={
      articles: [],
      // for particular articles or news create articles array and put this.articles in above array
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=f99e64fef2284b2e87f2aa09a002ee17&page=1pageSize=20";
    let data= await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=f99e64fef2284b2e87f2aa09a002ee17&page=${this.state.page - 1}&pageSize=20`;
    let data= await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    console.log("Previous")
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })  
  }
  handleNextClick = async ()=>{

    if (this.state.page+1> Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=f99e64fef2284b2e87f2aa09a002ee17&page=${this.state.page + 1}&pageSize=20`;
      let data= await fetch(url)
      let parsedData= await data.json()
      console.log(parsedData)
      console.log("Next")
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h1>News - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                 </div> 
        })}  
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
