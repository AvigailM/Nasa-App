export const formatDate = (date: Date): string =>
  date.toLocaleDateString(undefined, { day: "numeric", month: "long" })

export const API_IMG = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${KEY}&page=1&`

export const API_DATA = `https://api.nasa.gov/planetary/apod?date=2022-03-06&api_key=${KEY}`
