import React, { useState } from 'react';
import ImgItem from '../components/imgItem';
import { API_IMG } from '../helper';
import { Img } from '../types';

//earth_date=2020-11-1

const ImageByDate = () => {
    const [data, setData] = useState<Img[]>([]);
    const [search, setSearch] = useState<any>(); //earth_date YYYY-MM-DD	

    const searchByDate = () => {
        console.log("date ", search);
        //search is earth_date YYYY-MM-DD	
        fetch(API_IMG + 'earth_date=' + search)
            .then(response => response.json())
            .then(resData => {
                if (resData && resData.photos) {
                    setData(resData.photos)
                }
            });
        //2020-11-1)
    }

    return <div className="aboutContainer">
        <h1>
            Mars Image By Date
        </h1>
        <div className='inputSearchBox'>
            <p className='label'>Earth Date:</p>
            <input
                className='inputContainer'
                value={search}
                onChange={event => event.target.value && setSearch(event.target.value)}
                type="date"
                name="searchVal"
                placeholder="please enter date" />
            <button className="btnLink" onClick={() => { searchByDate() }}>Search</button>
        </div>
        <div className="listLayout">
            {
                data && data.length > 0 && data.map((item: Img) => {
                    return <ImgItem item={item}/>
                })
            }
        </div>

    </div>

}

export default ImageByDate;