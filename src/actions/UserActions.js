export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCES = 'LOGIN_SUCCES'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin () {
  return function (dispath) {
    dispath({
      type: LOGIN_REQUEST
    })
    // eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        let username = r.session.user.first_name

        dispath({
          type: LOGIN_SUCCES,
          payload: username
        })
      } else {
        dispath({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    }, 4)
  }
}
