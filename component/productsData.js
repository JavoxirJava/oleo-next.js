import React from 'react';
import {Button, Col, Row} from "reactstrap";
import Image from "next/image";
import image from "@/public/img_1.png";
import Link from "next/link";
import {url} from "@/component/api";

function ProductsData({data}) {
    return (
        <>
            <div className="p-products">
                <Row>
                    {data.map((item, i) =>
                        <Col className="col-3" key={i}>
                            <div className="p-product">
                                <p className="text-center p-p-p">{item.name}</p>
                                <Image className="p-p-img" src={image} alt="cloud"/>
                                <h4 className="text-center text-danger mb-3 home-title">{item.title}</h4>
                                <Button color="light" className="home-product-button">
                                    <Link id="link" href={url + "products/product"}>Batafsil ma`lumot olish</Link></Button>
                                <p className="text-center text-danger home-description">{item.description}</p>
                            </div>
                        </Col>
                    )}
                </Row>
            </div>
        </>
    );
}

export default ProductsData;