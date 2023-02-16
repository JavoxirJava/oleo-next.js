import React from 'react';
import {Button, Col, Row} from "reactstrap";
import Image from "next/image";
import image from "@/public/img_1.png";
import Link from "next/link";
import {url} from "@/component/api";

function ProductCarousel({data}) {
    return (
        <>
            <div className="home-container">
                <div className="home-img-container" id="imgs">
                    {data.map((item, i) =>
                        <div key={i}>
                            <Row className="ms-3 me-3">
                                <Col className="home-product-color" id={item.id}>
                                    <div>
                                        <p className="text-center home-product-name">{item.name}</p>
                                        <Image className="home-image-style" src={image} alt="cloud"/>
                                        <h5 className="text-center text-danger mb-4 home-title">{item.title}</h5>
                                        <Button color="light" className="home-product-button">
                                            <Link id="link" href={url + "products/product"}>Batafsil ma`lumot olish</Link>
                                        </Button>
                                        <p className="text-center text-danger home-description">{item.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}

export default ProductCarousel;
