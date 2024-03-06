import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://localhost:3001/products')
        .then((response) => response.json())
        .then((json) => {
            const chartData = json.map((item) => {
                return {
                    name: item.name,
                    price: item.price
                }
            })
            setData(chartData);
        })
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };


    const config = {
        data,
        xField: 'name',
        yField: 'price',
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        slider: {
        start: 0.0,
        end: 0.99,
        },
    };

    return(
        <div style={{margin: 'auto', width: '80%'}}>
            <Column {...config} />
        </div>
    ) 
}
 
export default Chart;