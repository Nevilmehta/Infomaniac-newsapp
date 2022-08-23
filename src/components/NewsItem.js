import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
          <div className="card" >
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-success' style={{left: '92%', zIndex:'1'}}>{source}</span>
          <img src={!imageUrl?"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/08_aug/12_fri/img_1660300109270_423.jpg?":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
