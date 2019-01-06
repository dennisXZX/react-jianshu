import axios from 'axios'

export const CHANGE_LOGIN = 'Login.CHANGE_LOGIN'
export const CHANGE_LOGOUT= 'Login.CHANGE_LOGOUT'

const _changeLogin = () => ({
  type: CHANGE_LOGIN,
  isLogin: true
})

const _changeLogout = () => ({
  type: CHANGE_LOGOUT,
  isLogin: false
})

export const login = (account, password) => (dispatch) => {
  axios.get(`/api/login.json?account=${account}&password=${password}`)
    .then(res => {
      const result = res.data.data

      if (result) {
        dispatch(_changeLogin())
      } else {
        console.log('login failure')
      }
    })
    .catch(err => {
      console.log('login error', err)
    })
}

export const logout = () => _changeLogout()