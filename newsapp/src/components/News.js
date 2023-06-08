import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinners from '../Spinners';
import PropTypes from 'prop-types';


export class News extends Component {
    articles = [
    ]

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        console.log("constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b907504c874e148fd593efeb588e0c&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json(); console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    }

    handlePrevClick = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b907504c874e148fd593efeb588e0c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ page: this.state.page - 1, articles: parseData.articles, loading: false })
    }

    handleNextClick = async () => {
        console.log("next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.setState({ loading: true });
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b907504c874e148fd593efeb588e0c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({ page: this.state.page + 1, articles: parseData.articles, loading: false })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>NewsMONKEY - TopHeadlines</h1>
                {this.state.loading && <Spinners />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((ele) => {
                        return <div className="col-md-4" key={ele.url}>
                            <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
                        </div>
                    })}
                    <div className='d-flex justify-content-between mt-5 mb-2'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
