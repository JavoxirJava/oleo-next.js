import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";
import {language} from "@/component/api";

function ProductCarouselBottom({onChange}) {
    const [lang, setLang] = useState("");

    useEffect(() => {
        setLang(language);
    }, []);

    return (
        <>
            {lang &&
                <div className="home-product-bottom">
                    <div className="home-button__position">
                        <Button color="danger" style={{borderRadius: "12px"}} className="me-5 home-button__position1">
                            <i className="bi bi-arrow-left-square-fill">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                     className="bi bi-arrow-left-square-fill home-btn-style" viewBox="0 0 16 16">
                                    <path
                                        d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                </svg>
                            </i><p className="d-inline ms-3 me-3 home-button-in-p">{lang.catalog}</p>
                        </Button>
                        <Button color="danger" style={{borderRadius: "12px", backgroundColor: "white"}}
                                className="me-5 border-0 home-button__position2">
                            <i className="bi bi-download" style={{backgroundColor: "#FED253"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                     className="bi bi-download text-danger p-1" viewBox="0 0 16 16"
                                     style={{backgroundColor: "#FED253", borderRadius: "8px"}}>
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                            </i><b
                            className="d-inline ms-3 me-3 home-button-in-p text-danger">{lang.downloadCatalog}</b>
                        </Button>
                        <p style={{width: "25%", display: "inline-flex", paddingTop: "1%"}}
                           className="text-danger ">{lang.fullCatalog}</p>
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
            }
        </>
    );
}

export default ProductCarouselBottom;