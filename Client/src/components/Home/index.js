import { Button, Col, Input, Row, Space, Table } from "antd";
import { HomeContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
// import { images, indicators, properties } from "./slide";
import Slide from './slide'
import { RightOutlined } from "@ant-design/icons";
import ListBook from "./ListBook";
import ThongKe from "./ListBook/ThongKe";

const Home = () => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(resp => resp.json())
            .then(data => {
                setProduct(data)
            })
    }, []);
    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then(resp => resp.json())
            .then(data => {
                setCategory(data)
            })
    }, []);
    
    
    return (  
        <HomeContainer>
            <div>
                {/* search */}
            </div>
            <div>
                {/* Slide */}
                <div className="mb-10 ml-5 pt-10 fs-16 green-text fw-600">Sách đề cử <RightOutlined /></div>
                <Slide/>
            </div>
            <div className="mt-40">
                {/* list */}
                <Row>
                    <Col span={16}>
                        <div className="mb-10 ml-5 pt-10 fs-16 green-text fw-600">Sách hay <RightOutlined /></div>
                        <ListBook/>
                    </Col>
                    <Col span={8} className="pl-10">
                        <ThongKe/>
                    </Col>
                </Row>
                
            </div>

        </HomeContainer>
    );
}
 
export default Home;