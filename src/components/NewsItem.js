import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,url}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
          <img src={urlToImage}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>

    )
  }
}
