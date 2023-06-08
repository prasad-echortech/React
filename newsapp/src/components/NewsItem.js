import React, { Component } from 'react';

export default class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card bg-dark text-white mt-3">
                    <img src={!imageUrl ? "https://as1.ftcdn.net/v2/jpg/04/56/93/18/1000_F_456931828_RgXl8RDtEM3eQRuBTUwrbpwCBItopAoV.jpg" : imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"> <p class="card-text"><small class="text-white">By {!author ? "Unknown🤔" : author} On {new Date(date).toGMTString()}</small></p></p>
                        <a href={newsUrl} target='_blank' className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </>
        );
    }


}
