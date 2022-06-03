
export type Weather = {
    sol: string
    windSpeed: number
    pressure: number
    temperature: number
    windDirectionDegrees: number
    date: Date
    first_UTC: Date
    last_UTC: Date
}

export type Img = {
    id: number
    img_src: string
}