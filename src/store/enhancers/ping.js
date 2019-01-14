export const ping = store => next => action => {
  console.log(`событие: ${action.type}, данные события: ${action.payload}`)
  return next(action)
}
