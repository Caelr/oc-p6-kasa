export const getHousing = ({request: {signal}}) => {
  return fetch('./housing.json', {signal})
}
