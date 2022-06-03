import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgItem from '../components/imgItem';
import { API_DATA, API_IMG } from '../helper';
import { Img } from '../types';

const AboutPage = () => {
    const [listImgs, setListImgs] = useState<Img[]>([]);
    const [data, setData] = useState<any>([]);
    let navigate = useNavigate();

    useEffect(() => {
        const run = () => {
            fetch(API_DATA)
                .then(response => response.json())
                .then(resData => {
                    setData(resData)
                });

            fetch(API_IMG+'earth_date=2020-6-3')
            .then(response => response.json())
                .then(resData => {
                    if (resData && resData.photos) {
                        setListImgs(resData.photos)
                    }
                });
        }
        run()
    }, []);

    return <div className="aboutContainer">
        <h1>
            About The Program
        </h1>
        <div className="topLayout">
            <div className="imageMain">
                <img src={data.url} width="200" />
            </div>
            <div className="textMain">
                <div className='txtBox'>
                    {data.explanation}
                </div>
                <div className='btnsBox'>
                    <button className="btnLink" onClick={() => { navigate("/imageByDate"); }}>View Image By Date</button>
                    <button className="btnLink" onClick={() => { navigate("/weather"); }}>View Weather</button>
                </div>
            </div>
        </div>
        <div className='bottomLayout'>
            {
                listImgs && listImgs.length > 0 && listImgs.map((item: any) => {
                    return <ImgItem item={item}/>
                })
            }
        </div>
    </div>

}

export default AboutPage;