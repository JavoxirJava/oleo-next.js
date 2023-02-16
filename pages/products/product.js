import React from 'react';
import {Button, Col, Row} from "reactstrap";
import img from "@/public/mahsulotlar/img.png";
import Image from "next/image";
import {data} from "@/component/data";
import Path from "@/component/path";
import ProductCarousel from "@/component/ProductCarousel";
import ProductCarouselBottom from "@/component/productCarouselBottom";

function Product() {
    return (
        <>
            <div className="product-king">
                <Path/>
                <div className="product-info">
                    <Row className="m-0">
                        <Col className="col-5">
                            <Image src={img} alt="product"/>

                        </Col>
                        <Col className="col-7">
                            <div className="product-col-7">
                                <h4>ВКУСНОЕ НАСТРОЕНИЕ. СЛИВОЧНЫЙ</h4>
                                <p>Растительно-сливочный спред {"\"OLEO\""} с массовой долей жира 60%, 200 гр</p>
                                <h5 className="pt-4">Состав:</h5>
                                <p>натуральное сливочное масло, заменитель молочного жира, сухое молоко, питьевая вода,
                                    соль пищевая, сахар, эмульгатор, сорбат калия, лимонная кислота, ароматизатор.</p>
                                <h5 className="pt-4">Срок годности:</h5>
                                <p>с даты изготовления 90 дней при температуре хранения до +5,0°C, от -18,0°C и ниже 180
                                    дней.</p>
                                <Button color="danger" style={{borderRadius: "12px"}} className="mt-4">
                                    <i className="bi bi-arrow-left-square-fill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor"
                                             className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16"
                                             style={{transform: "rotateZ(180deg)", marginLeft: "-6%"}}>
                                            <path
                                                d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                        </svg>
                                    </i>
                                    <p className="d-inline ms-4 me-4">Sotib olish</p>
                                </Button>
                            </div>
                        </Col>
                    </Row>

                </div>

                <ProductCarousel data={data}/>
                <ProductCarouselBottom />
            </div>
        </>
    );
}

export default Product;
