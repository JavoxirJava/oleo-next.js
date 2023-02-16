import React from 'react';
import Path from "@/component/path";
import {Col, Row} from "reactstrap";
import Image from "next/image";
import img from "@/public/mahsulotlar/img_1.png";
import icon from "@/public/img_9.png";

function Video() {
    return (
        <>
            <Path/>
            <div className="video-body">
                <Row className="m-0">
                    <Col className="col-7">
                        <h2>ВКУСНОЕ НАСТРОЕНИЕ. СЛИВОЧНЫЙ</h2>
                        <p>{'Растительно - сливочный спред "OLEO" с массовой долей жира 60%, 200 гр'}</p>
                        <div className="video-description">
                            <h5>Состав:</h5>
                            <p>натуральное сливочное масло, заменитель молочного жира, сухое молоко, питьевая вода, соль
                                пищевая, сахар, эмульгатор, сорбат калия, лимонная кислота, ароматизатор.натуральное
                                сливочное масло, заменитель молочного жира, сухое молоко, питьевая вода, соль пищевая,
                                сахар, эмульгатор, сорбат калия, лимонная кислота, ароматизатор.натуральное сливочное
                                масло, заменитель </p>
                        </div>
                    </Col>
                    <Col className="col-5">
                        <Image className="product-image" src={img} alt="product"/>
                        <Image className="video-icon" src={icon} alt="icon"/>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Video;