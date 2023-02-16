import React, {useEffect, useState} from 'react';
import Path from "@/component/path";
import {Button, Col, Input, Row} from "reactstrap";
import Logo from "@/component/logo";
import Image from "next/image";
import image2 from "@/public/mahsulotlar/img_2.png";
import instagram from "@/public/insta-logo.png";
import logo from "@/public/oleo-logo.png";
import personImg from "@/public/img_10.png";
import {CommendSend, language} from "@/component/api";

function About() {
    const [lang, setLang] = useState("");

    useEffect(() => {
        setLang(language);
    }, []);

    return (
        <>
            {lang &&
                <div>
                    <Path/>
                    <div className="about_king">
                        <div className="about_box m-0">
                            <Row className="m-0">
                                <Col className="col-7 about_1_page">
                                    <h3>{lang.enterpriseAbout}</h3>
                                    <p>{lang.oleoAbout}</p>
                                </Col>
                                <Col className="col-5">
                                    <iframe width="380" height="200" src="https://www.youtube.com/embed/tIOxZyZE2tM"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </Col>
                            </Row>
                            <Row className="m-0 p-0 about_2">
                                <Col className="col-3">
                                    <div>
                                        <Logo width="100" height="100"/>
                                        <div className="">
                                            <h5>{lang.qualityProducts}</h5>
                                            <p>{lang.countryAgroIndustrial}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-3">
                                    <div>
                                        <Logo width="100" height="100"/>
                                        <div className="">
                                            <h5>{lang.qualityProducts}</h5>
                                            <p>{lang.countryAgroIndustrial}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-3">
                                    <div>
                                        <Logo width="100" height="100"/>
                                        <div className="">
                                            <h5>{lang.qualityProducts}</h5>
                                            <p>{lang.countryAgroIndustrial}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-3">
                                    <div>
                                        <Logo width="100" height="100"/>
                                        <div className="">
                                            <h5>{lang.qualityProducts}</h5>
                                            <p>{lang.countryAgroIndustrial}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="about_row_3 m-0">
                                <Col className="col-7">
                                    <Image src={image2} alt="image"/>
                                </Col>
                                <Col className="col-5 svg_for">
                                    <div>
                                        <h3>{lang.ourTeam}</h3>
                                        <p>{lang.countryAgroIndustrial} {lang.countryAgroIndustrial} {lang.countryAgroIndustrial}</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                         className="bi bi-facebook " viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                         className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                    <Image className="me-3" src={instagram} alt="Picture of the author"
                                           style={{width: "19%", height: "14%"}}/>
                                    <Button color="danger">+998 93 818 81 77</Button>
                                </Col>
                            </Row>
                            <div className="about_box_2 ">
                                <h4>{lang.productNumbers}</h4>
                                <Row className="p-0">
                                    <Col className="about_col_1 col_1">
                                        <div className="about_cols">
                                            <p>{lang.oleoColl}</p>
                                            <h1 className="about_col_h1">500 +</h1>
                                        </div>
                                    </Col>
                                    <Col className="about_col_1 col_2">
                                        <div className="about_cols">
                                            <p>{lang.oleoColl}</p>
                                            <h1 className="col_font">3K +</h1>
                                        </div>
                                    </Col>
                                    <Col className="about_col_1 col_3">
                                        <div className="about_cols">
                                            <p>{lang.oleoColl}</p>
                                            <h1 className="col_font">50 +</h1>
                                        </div>
                                    </Col>
                                    <Col className="about_col_1 about_col_4">
                                        <div className="about_cols about_4_in_4">
                                            <p>Yillik ishlab chiqarish soni</p>
                                            <div className="set-size charts-container">
                                                <div className="pie-wrapper progress-45 style-2">
                                                    <span className="label">500 T</span>
                                                    <div className="pie">
                                                        <div className="left-side half-circle"></div>
                                                        <div className="right-side half-circle"></div>
                                                    </div>
                                                    <div className="shadow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="comment_box">
                                    <div className="home-8-box">
                                        <div className="pt-2 ps-4 pe-4">
                                            <div className="footer-info">
                                                <Image className="footer-image" src={logo} alt="Picture of the author"
                                                       width="350px"
                                                       height="300px"/>
                                                <p className="d-inline text-light mt-4" style={{width: "65%"}}>
                                                    <span className="home-8-title">Taklif va savollar uchun</span>
                                                    Bizning operatorilarimiz siz bilan 24 soat ichida siz bilan
                                                    bog’lanishadi
                                                </p>
                                            </div>
                                            <Input className="home-8-input" placeholder="Isim famliyangiz"
                                                   id="cFullName"/>
                                            <Input className="home-8-input mt-3" placeholder="Telefon raqamingiz"
                                                   id="cPhoneNumber"/>
                                            <Input className="home-8-input home-8-input-comment mt-3" type="textarea"
                                                   placeholder="Habaringizni yozib qoldiring..." id="comment"/>
                                            <Button className="home-8-button" color="light" onClick={CommendSend}
                                                    id="sendMessage">Ma’lumotlarni yuborish</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="person_img">
                                    <Image src={personImg} alt="person img"
                                           style={{margin: "-51% 0 0 59%", width: "35%", height: "32rem",}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}
export default About;