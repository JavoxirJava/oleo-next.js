import Image from "next/image";
import background from "@/public/img.png";
import shadow from "@/public/shadow.png";
import butter from "@/public/butter.png";
import React, {useEffect, useState} from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Col,
    Input,
    Modal,
    ModalBody,
    Row
} from "reactstrap";
import image3 from "@/public/img_3.png";
import image4 from "@/public/img_4.png";
import image5 from "@/public/img_5.png";
import image6 from "@/public/img_6.png";
import image7 from "@/public/mahsulotlar/image.png";
import image8 from "@/public/img_7.png";
import logo from "@/public/oleo-logo.png";
import ProductCarousel from "@/component/ProductCarousel";
import ProductCarouselBottom from "@/component/productCarouselBottom";
import Advantage from "@/component/advantage";
import image11 from "@/public/img_11.png";
import {byId, CommendSend, language, sendMessage, url} from "@/component/api";
import {toast} from "react-toastify";
import Link from "next/link";
import axios from "axios";
import {data} from "@/component/data";

function Home() {
    let imgs, img, index = 0, index2 = 1;
    const [modal, setModal] = useState(false);
    const [lang, setLang] = useState("");
    const [products, setProducts] = useState(data);

    useEffect(() => {
        if (!localStorage.getItem("lang")) localStorage.setItem("lang", "uz");
        startFunction();
        setLang(language);
    }, []);

    function getProduct() {
        axios.get(url + "product/")
            .then(res => {
                setProducts(res.data);
            }).catch(() => {
            toast.error("productni topishda xatolik")
        });
    }

    // const getFile = (data) => data.image;
    function getFile(url) {
        axios.get(url).then(res => {
            console.log(res.data.image)
            return res.image;
        });
        return null;
    }


    const openModal = () => setModal(!modal);


    // let interval = setInterval(run, 4000);
    //
    // function run() {
    //     onChange(true);
    // }
    //
    // function resetInterval() {
    //     clearInterval(interval);
    //     interval = setInterval(run, 4000);
    // }

    function startFunction() {
        imgs = document.getElementById("imgs")
        img = document.querySelectorAll("#imgs img");
    }

    function onChange(isRight) {
        startFunction()
        console.log(isRight)
        index = isRight ? index += 1 : index -= 1;
        if (isRight) {
            if (img) if (index > img.length - 13) index = 0;
        } else if (index <= 0) index = 0;
        console.log(-index * 10)
        console.log(imgs)
        if (imgs) imgs.style.transform = `translateX(${-index * 21}%)`;
    }

    function nextProduct(isRight) {
        index2 = isRight ? index2 += 1 : index -= 1;
        if (isRight) console.log("yes");

    }

    function leftProduct() {
        let king = document.querySelectorAll("#product_carousel_2 div");
        if (index2 === 7) index2 = 0;
        king.forEach(a => {
            // a.style = `{translate: 5s ease-in-out; translateX(${-index2 * 25}%)}`;
            a.style.transition = `1s`;
            a.style.transform = `translateX(${-index2 * 50}%)`;
        });
        index2++;
    }

    const [open, setOpen] = useState('1');
    const toggle = (id) => setOpen(open === id ? "" : id);

    function sendComment() {
        let fullName = byId("fullName");
        let phoneNumber = byId("phoneNumber");
        let soha = byId("soha");
        if (fullName === "" || phoneNumber === "" || soha === "") {
            toast.error("barcha malumot tuldirilishi shart!");
        } else sendMessage(`Ism: ${fullName}, %0ATelefon Raqam: ${phoneNumber}, %0ASoha: ${soha}`).then(() => {
            toast.success("send message");
            openModal();
        });
    }

    return (
        <>
            <div>
                {/*1-page*/}
                <div>
                    <Image className="home-background-img" src={background} alt="cloud"/>
                    <Image className="home-background-img home-shadow" src={shadow} alt="cloud"/>
                    <Image className="home-butter" src={butter} alt="cloud"/>
                    <div className="home-1-info">
                        <h3>{lang.name}</h3>
                        <p>{lang.description}</p>
                        <Button color="danger" className="btn_1">{lang.more}</Button>
                        <Button color="warning" className="btn_2">{lang.contact}</Button>
                    </div>
                </div>
                {/*2-page*/}
                <ProductCarousel data={products}/>
                <ProductCarouselBottom onChange={onChange}/>
                {/*3-page*/}
                <div>
                    <div className="home-3-king">
                        <div className="home-3-info">
                            <h2>{lang.pastries}</h2>
                            <p>{lang.sweets}</p>
                            <i className="bi bi-play-circle-fill home-3-svg">
                                <svg width="80" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg"
                                     onClick={leftProduct}>
                                    <circle opacity="0.2" cx="56.5" cy="56.5" r="56.5"
                                            transform="matrix(-1 0 0 1 113 0)" fill="#D72A33"/>
                                    <path
                                        d="M32.3011 52.9084C30.1278 54.1459 30.1278 57.2398 32.3011 58.4773L67.7527 78.6644C69.926 79.902 72.6426 78.3551 72.6426 75.88L72.6426 35.5057C72.6426 33.0306 69.926 31.4837 67.7527 32.7213L32.3011 52.9084Z"
                                        fill="#D72A33"/>
                                </svg>
                                <h5 className="d-inline ms-4">{lang.nextDish}</h5>
                            </i>
                            <Image src={image8} alt="cloud"/>
                        </div>
                        <div className="home-3-row" id="product_carousel_2">
                            {products.map((post, i) =>
                                <div key={i} className="home-3-cols1" id="carousel-overflow">
                                    <div className="home-3-cols">
                                        {/*<Image src={getFile(url + "attachment/" + post.attachment)} alt="cloud"/>*/}
                                        <Image src={image7} alt="cloud"/>
                                        <p className="home-3-col-name">{post.name}</p>
                                        <p className="home-3-col-description">{post.description} Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit. Aperiam consequatur distinctio earum ex
                                            mollitia obcaecati pariatur provident quaerat ratione sit.</p>
                                        <Button color="light">
                                            <i className="bi bi-play-fill">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40"
                                                     fill="currentColor" className="bi bi-play-fill"
                                                     viewBox="0 0 16 16">
                                                    <path
                                                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                                </svg>
                                            </i>
                                            <Link id="link" href={url + "video"}>{lang.recipe}</Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/*4-page*/}
                <div className="home-4-page-king" id="about">
                    <div>
                        <h1>{lang.aboutUs}</h1>
                        <p>{lang.aboutInfo}</p>
                        <Button color="danger" className="home-4-button">
                            <i className="bi bi-arrow-left-square-fill">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                     className="bi bi-arrow-left-square-fill home-btn-style" viewBox="0 0 16 16">
                                    <path
                                        d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                </svg>
                            </i><h6 className="d-inline ms-3 me-3 ">
                            <Link id="link" href={url + "about"}>{lang.more}</Link></h6>
                        </Button>
                        <Button className="button-left">
                            <i className="bi bi-play-btn-fill">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="currentColor"
                                     className="bi bi-play-btn-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                            </i><h6 className="d-inline ms-4 me-3 text-danger">
                            <Link id="link" href={url + "video"}>{lang.videoClip}</Link></h6>
                        </Button>
                    </div>
                </div>
                {/*5-page*/}
                <div className="home-5-page-king">
                    <Image className="home-img1" src={image3} alt="cloud"/>
                    <Image className="home-img2" src={image4} alt="cloud"/>
                    <Image className="home-ime3" src={image5} alt="cloud"/>
                    <div>
                        <Image className="home-ime4" src={image6} alt="cloud"/>
                        <h2 className="home-h-2">{lang.cooperate}</h2>
                        <p>{lang.enterpriseAbout}</p>
                        <div className="home-h6">
                            <h6>{lang.companiesOffer}</h6>
                        </div>
                        <Row className="home-row">
                            <Col className="col-4 home-col-1 home-cols">
                                <p>{lang.mainProviders}</p>
                                <p>{lang.kindergartensAndHospitals}</p>
                            </Col>
                            <Col className="col-4 home-col-2 home-cols">
                                <p>{lang.cateringEstablishments}</p>
                                <p>{lang.confectioneryEnterprises}</p>
                            </Col>
                            <Col className="col-4 home-col-3 home-cols">
                                <p>{lang.bakeries}</p>
                                <p>{lang.socialInstitutions}</p>
                            </Col>
                        </Row>
                        <div className="home-5-buttons">
                            <Button color="light" style={{borderRadius: "12px"}} onClick={openModal}>
                                <div className="button_svg">
                                    <svg width="21" viewBox="0 0 21 17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7.89017L0 0L3.97291 7.89017H21Z" fill="white"/>
                                        <path d="M0 17L21 9.10983H3.97291L0 17Z" fill="white"/>
                                    </svg>
                                </div>
                                <p className="d-inline ms-4 me-4 ">{lang.purchase}</p>
                            </Button>
                            <Button style={{borderRadius: "12px"}}>
                                <i className="bi bi-arrow-left-square-fill">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                         className="bi bi-arrow-left-square-fill home-btn-style"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                    </svg>
                                </i><p className="d-inline ms-3 me-3 ">{lang.learnMore}</p>
                            </Button>
                        </div>

                    </div>
                </div>
                {/*6-page*/}
                <div className="home-container">
                    <div className="home-6-title">
                        <h2>{lang.newsAndEvents}</h2>
                        <Row>
                            <Col className="col-12">{lang.industryNews}</Col>
                            <Col>{lang.meetCan}</Col>
                        </Row>
                    </div>
                    <ProductCarousel data={products}/>
                    <div className="home-product-bottom">
                        <div className="home-button__position">
                            <Button>
                                <i className="bi bi-arrow-left-square-fill">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                         className="bi bi-arrow-left-square-fill home-btn-style" viewBox="0 0 16 16">
                                        <path
                                            d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                    </svg>
                                </i><p className="d-inline ms-3 me-3 home-button-in-p">
                                <Link id="link" style={{color: "white"}} href={url + "news"}>{lang.allNews}</Link></p>
                            </Button>
                            <p style={{width: "30%", display: "inline-flex", paddingTop: "1%", marginRight: "20%"}}
                               className="text-danger">{lang.lastUpdate}</p>
                            <div className="d-inline ms-5">
                                <i className="bi bi-arrow-left-circle" style={{color: "#E5363E"}}
                                   onClick={() => onChange(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor"
                                         className="bi bi-arrow-left-circle home-next-btn-style" viewBox="0 0 16 16">
                                        <path
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </i>
                                <i className="bi bi-arrow-left-circle ms-3" style={{color: "#E5363E"}}
                                   onClick={() => onChange(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor"
                                         style={{transform: "rotateY(180deg)"}}
                                         className="bi bi-arrow-left-circle home-next-btn-style" viewBox="0 0 16 16">
                                        <path
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                {/*7-page*/}
                <div className="home-7-king">
                    <div className="home-7-container">
                        <div style={{marginLeft: "-23%"}}>
                            <Advantage/>
                        </div>
                        <div>
                            <div className="home-7-info">
                                <h1>F.A.Q</h1>
                                <Row>
                                    <Col className="col-12">{lang.industryNews}</Col>
                                    <Col>{lang.meetCan}</Col>
                                </Row>
                            </div>
                        </div>
                        <div className="home-7-accordion">
                            <div>
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem>
                                        <AccordionHeader targetId="1" className="home-7-accordion-header">
                                            <h5>{lang.oleoWhere}</h5>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">{lang.oleoCenter}</AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2" className="home-7-accordion-header">
                                            <h5>{lang.whatDealer}</h5>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">{lang.oleoCenter}</AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3" className="home-7-accordion-header">
                                            <h5>{lang.whatBenefits}</h5>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">{lang.oleoCenter}</AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="4" className="home-7-accordion-header">
                                            <h5>{lang.whatMaximumAmount}</h5>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="4">{lang.oleoCenter} </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                {/*8-page*/}
                <div className="home-8-king">
                    <div className="home-8-box">
                        <div className="pt-2 ps-4 pe-4">
                            <div className="footer-info">
                                <Image className="footer-image" src={logo} alt="Picture of the author" width="350px"
                                       height="300px"/>
                                <p className="d-inline text-light mt-4" style={{width: "72%"}}>
                                    <span className="home-8-title">{lang.forSuggestionsAndQuestions}</span>
                                    {lang.ourOperators}
                                </p>
                            </div>
                            <Input className="home-8-input" style={{backgroundColor: "#FED253"}}
                                   placeholder={lang.fullName} id="cFullName"/>
                            <Input className="home-8-input mt-3" style={{backgroundColor: "#FED253"}}
                                   placeholder={lang.phoneNumber} id="cPhoneNumber"/>
                            <Input className="home-8-input home-8-input-comment mt-3"
                                   style={{backgroundColor: "#FED253"}} type="textarea"
                                   placeholder={lang.message} id="comment"/>
                            <Button className="home-8-button" id="sendMessage"
                                    onClick={CommendSend}>{lang.sendData}</Button>

                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={openModal} centered fullscreen="lg" size="lg">
                <ModalBody className="home_modal_body">
                    <div className="home-modal-logo">
                        <Image src={image11} alt="modalLogo"/>
                        <Image src={image6} alt="modalLogo"/>
                        <h3>{lang.cooperate}</h3>
                        <p>{lang.enterpriseAbout}</p>
                    </div>
                    <div className="full_input">
                        <Input placeholder={lang.fullName} id="fullName"/>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                id="soha">
                            <option selected disabled>{lang.selectSoha}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <Input placeholder={lang.phoneNumber} id="phoneNumber"/>
                    </div>
                    <Button color="danger" className="modal_button" onClick={sendComment}>
                        <div className="button_svg">
                            <svg width="21" viewBox="0 0 21 17"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 7.89017L0 0L3.97291 7.89017H21Z" fill="#E6363F"/>
                                <path d="M0 17L21 9.10983H3.97291L0 17Z" fill="#E6363F"/>
                            </svg>
                        </div>
                        <p className="d-inline ms-4 me-4 text-light">{lang.sendInquiry}</p>
                    </Button>
                </ModalBody>
            </Modal>
        </>
    )
}

export default Home;