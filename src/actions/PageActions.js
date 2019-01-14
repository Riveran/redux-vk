export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export function getPhotos (year) {
  return dispath => {
    dispath({ type: GET_PHOTOS_REQUEST, payload: year })

    setTimeout(() => {
      dispath({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5]
      })
    }, 1000)
  }
}
