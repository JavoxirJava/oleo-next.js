import React, {useEffect, useState} from 'react';
import {Col, Row} from "reactstrap";
import Logo from "@/component/logo";
import {language} from "@/component/api";

function Advantage() {
    const [lang, setLang] = useState("");

    useEffect(() => {
        setLang(language);
    }, []);
    return (
        <>
            {lang &&
                <div className="home-7-container">
                    <h2>{lang.ourAdvantages}</h2>
                    <Row className="home-7-row">
                        <Col className="col-4 home-7-col">
                            <div><Logo width="114" height="151"/>
                                <div className="">
                                    <h5>{lang.qualityProducts}</h5>
                                    <p>{lang.countryAgroIndustrial}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-4 home-7-col">
                            <div><Logo width="114" height="151"/>
                                <div className="">
                                    <h5>100% {lang.naturalProduct}</h5>
                                    <p>{lang.productExperience}</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-4 home-7-col">
                            <div><Logo width="114" height="151"/>
                                <div className="">
                                    <h5>{lang.greatTaste}</h5>
                                    <p>{lang.excellentTaste}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            }
        </>

    );
}

export default Advantage;