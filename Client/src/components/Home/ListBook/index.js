import { useEffect, useState } from "react";
import { PageContainer } from "./styled";
import { Card, Col, Pagination, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";

const ListBook = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(resp => resp.json())
            .then(data => {
                setProduct(data)
            })
    }, []);

    const pageSize = 8;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, product.length);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <PageContainer>
            {/* list book */}
            <Row>
            {
                product.slice(startIndex, endIndex).map((p, index) => (
                    <>
                        <Col span={6} key={index} className="d-flex">
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
                                        height: '180px',
                                        position: 'relative',
                                    }}>
                                        <div style={{
                                            backgroundColor: 'black', 
                                            opacity: '0.7', 
                                            height: '30px',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <div className="d-flex">
                                                <span className="white m-auto">Like</span>
                                                <span className="white m-auto">View</span>
                                                <span className="white m-auto">Comment</span>
                                            </div>
                                        </div>  
                                    </div>
                                }
                            >
                                <div>
                                    <span className="fs-17">{p.name}</span>
                                    <div className="mt-10">
                                        List chapter
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </>
                ))
            }
            </Row>
            <Pagination
                current={currentPage}
                defaultPageSize={pageSize}
                total={product.length}
                onChange={handlePageChange}
            />
        </PageContainer>
    )
}

export default ListBook;