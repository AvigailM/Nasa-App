import React, { useEffect, useState } from 'react';
import ListItem from '../components/listItem';
import Loader from '../components/loader';
import { formatDate } from '../helper';
import { Weather } from '../types';

const API_URL = 'https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0'


const MarsWeather = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [weather, setWeather] = useState<Weather[] | []>([])

    useEffect(() => {
        const fetchFromAPI = async () => {
            const res = await fetch(API_URL)
            const weather = await res.json()
            const marsWeather = weather.sol_keys.map((key: string) => {
                return {
                    sol: key,
                    first_UTC: weather[key].First_UTC,
                    last_UTC: weather[key].Last_UTC,
                    temperature: weather[key].AT?.av ?? "No data",
                    pressure: weather[key].PRE?.av ?? 0,
                    windSpeed: Math.round(weather[key].HWS?.av ?? 0),
                    date: formatDate(new Date(weather[key].First_UTC))
                }
            })
            setWeather(marsWeather)
            setLoading(false)

        }

        fetchFromAPI()
    }, [])


    return <>{
        loading ?
            <Loader />
            :
            <div className="aboutContainer">
                <h1 className='spaceBottom'>
                    Mars Weather
                </h1>
                <div className="listLayout">
                    {
                        weather.map((item: Weather) => {
                            return (<ul className="itemInList" key={item.sol}>
                                <ListItem label={"Data Point"} item={item.sol} />
                                <ListItem label={"Temperature(Avg)"} item={item.temperature} />
                                <ListItem label={"Pressure(Avg)"} item={item.pressure} />
                                <ListItem label={"Wind(Avg)"} item={item.windSpeed} />
                                <ListItem label={"Wind Direction"} item={item.windDirectionDegrees} />
                                <ListItem label={"first UTC"} item={item.first_UTC} />
                                <ListItem label={"last UTC"} item={item.last_UTC} />
                            </ul>)
                        })
                    }

                </div>
            </div>
    }
    </>
}

export default MarsWeather;