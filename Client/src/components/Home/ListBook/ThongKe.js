import { useEffect, useState } from "react";
import { Divider, Row, Col } from 'antd'
import { PageContainer } from "./styled";

const ThongKe = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(resp => resp.json())
            .then(data => {
                setProduct(data)
            })
    }, []);

    return (
        <PageContainer>
            <div className="rank">
                <div 
                    style={{backgroundColor: '#FAF9F9', height: '40px'}} 
                    className="mb-20"
                > 
                    <div className="p-13 fs-14 green-text fw-600 m-auto">Xếp hạng</div>
                </div>
                <div className="">
                    <Row>
                        {
                            product.slice(0, 5).map((p, item) => (
                                <>
                                    <Col span={4}>
                                        <div className="fw-700 fs-18 pl-15">
                                            0{item+1}
                                        </div>
                                    </Col>
                                    <Col span={4}>
                                        <div style={{
                                                backgroundImage: `url('https://cdn.popsww.com/blog/sites/2/2021/03/doraemon-wiki-1920x1080-1920x1080.jpg')`,
                                                backgroundSize: 'cover', 
                                                backgroundPosition: 'center',
                                                height: '50px',
                                                width: '100%'
                                            }}>
                                            {/* <img height={35} src="https://cdn.popsww.com/blog/sites/2/2021/03/doraemon-wiki-1920x1080-1920x1080.jpg" alt="avt"/> */}
                                        </div>
                                    </Col>
                                    <Col span={16}>
                                        <div className="d-flex flex-column ml-10">
                                            <div className="pb-10 ">{p.name}</div>
                                            <div className="">
                                                <span className="mr-100 font-times-new-roman">Chapter</span>
                                                <span className="font-times-new-roman">View</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Divider/>
                                </>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </PageContainer>
    )
}

export default ThongKe;