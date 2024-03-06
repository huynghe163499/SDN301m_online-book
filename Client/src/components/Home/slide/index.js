import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import { SlideContainer } from "./styled";
import Slider from 'react-slick';



const Slide = () => {
    
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(resp => resp.json())
            .then(data => {
                setProduct(data)
            })
    }, []);

    // const images = product.map((p, index) => ({
    //     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    //     caption: `Slide ${index + 1}`,
    //     name: p.name 
    // }));

    // const properties = {
    //     prevArrow: <button className="button-style-slide"><BackwardOutlined /></button>,
    //     nextArrow: <button className="button-style-slide"><ForwardOutlined size={"large"} /></button>
    // }

    // const indicators = (index) => (<div className="indicator-slide">{index + 1}</div>);

    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        setStartIndex(prevIndex => prevIndex + 1)
    };
    
    const previous = () => {
        setStartIndex(prevIndex => prevIndex - 1);
    };

    return (
        // <Fade scale={0.4} {...properties} indicators={indicators}>
        //     {
        //         images.map((image, index) => (
        //             <div key={index} style={{width: "20%"}}>
        //                 <div className="slide-image" style={{'backgroundImage' : `url(${image.url})` }}> {image.name} </div>
        //             </div>
        //         ))
        //     }
        // </Fade>
        <SlideContainer>
            <button className="prev" onClick={previous} disabled={startIndex === 0}><ForwardOutlined/></button>
            <Row className="main">
                {
                    product.slice(startIndex, startIndex + 6).map((p, index) => (
                        <>
                            <Col span={4} key={index} className="d-flex">
                                <Card
                                    style={{
                                        width: '95%',
                                        cursor:'pointer',
                                        margin: 'auto',
                                    }}
                                    cover={
                                        <div style={{
                                            backgroundImage: `url('https://cdn.popsww.com/blog/sites/2/2021/03/doraemon-wiki-1920x1080-1920x1080.jpg')`,
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center',
                                            height: '200px',
                                            position: 'relative',
                                        }}>
                                            <div style={{
                                                backgroundColor: 'black', 
                                                opacity: '0.7', 
                                                height: '60px',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}>
                                                <span className="white m-auto fs-15 fw-600">{p.name}</span>
                                                <div className="d-flex">
                                                    <span className="white m-auto">Chapter</span>
                                                    <span className="white m-auto">Vote</span>
                                                </div>
                                            </div>  
                                        </div>
                                    }
                                >
                                </Card>
                            </Col>
                        </>
                    ))
                }
            </Row>
            <button className="next" onClick={next} disabled={startIndex + 6 >= product.length}><BackwardOutlined /></button>
        </SlideContainer>
    )
}

export default Slide