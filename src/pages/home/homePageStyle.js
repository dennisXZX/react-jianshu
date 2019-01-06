import styled from 'styled-components'
import homeBannerImage from '../../statics/home_banner.jpg'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
`

export const HomeBanner = styled.img.attrs({
  src: `${homeBannerImage}`
})`
  width: 625px;
  height: 270px;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const BackToTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(234, 111, 90, 0.12)
  }
`