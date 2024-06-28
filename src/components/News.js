import React, { useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async() =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMaster`
    updateNews();
    // eslint-disable-next-line
  },[])
  
  // handlePreviousClick = async ()=>{
  //  setPage(page-1)
  //   updateNews()
  // }

  // handleNextClick = async ()=>{
  //   setPage(page+1)
  //   updateNews()
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  
    return (
        <>
        <h1 className="text-center" style={{margin: '35px 0px',marginTop:'90px'}}>NewsMaster - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
          <div className="container">
            <div className="row">
            {articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1718570470100.jpg-org"} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
            </div>
            })}
            </div>
            </div>
          </InfiniteScroll>
          
        

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
}

News.defaultProps = {
  country:"in",
  pageSize: 6,
  category:"general"
}

News.propTypes = {
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}

export default News