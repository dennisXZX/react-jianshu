import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMoreList } from '../homePageActions'

import {
  ListItem,
  ListInfo,
  ListImage,
  LoadMore
} from './listStyle'

import listImage from '../../../statics/topic-image.jpeg'

class List extends Component {
  render () {
    const {
      articleList,
      getMoreList,
      articlePage
    } = this.props

    return (
      <div>
        {articleList.map((article, index) => {
          return (
            <Link key={index} to='/detail'>
              <ListItem>
                <ListImage url={listImage} />
                <ListInfo>
                  <h3 className='title'>{article.title}</h3>
                  <p className='desc'>{article.description}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}

        <LoadMore onClick={() => getMoreList(articlePage)}>Load More</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.home.articleList,
    articlePage: state.home.articlePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(articlePage) {
      dispatch(getMoreList(articlePage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
