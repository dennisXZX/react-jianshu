import styled from 'styled-components'
import logoImage from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    height: 56px;
    width: 100px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url('${logoImage}');
    background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 30px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 1.2rem;
  color: #333;

  &.left {
    float: left;
  }
  
  &.right {
    float: right;
    color: #969696;
  }
  
  &.active {
    color: #ea6f5a;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 59px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`

export const SearchInfoTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  
  &:hover {
  color: #555;
  }
  
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 3px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  padding: 10px 0 0;
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    border: 1px solid #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  
  .zoom {
    cursor: pointer;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 1.3rem;
    transition: all 0.4s ease-out;
    transform: rotate(0deg);

    &.focused {
      background: #777;
      color: #fff;
      transform: rotate(360deg);
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: 'Search...'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 1.1rem;
  color: #666;
  transition: all .2s ease-out;
  
  &::placeholder {
    color: #999
  }
  
  &.focused {
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 1.1rem;
  
  &.register {
    color: #ec6149;
  }
  
  &.write {
    color: #fff;
    background: #ec6149;
  }
`