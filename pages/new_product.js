import React from 'react';
import Path from "@/component/path";
import {Button} from "reactstrap";
import Image from "next/image";
import backImg from "@/public/img_2.png";
import {data} from "@/component/data";
import Products from "@/component/productsData";

function NewProduct() {
    return (
        <>
            <Path/>
            <div className="new_product-king">
                <div className="new_page-info">
                    <h2>{"Iran protests: 'No going back' as unrest hits 100 days"}</h2>
                    <svg width="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="22" fill="#D72A33"/>
                        <g clipPath="url(#clip0_385_766)">
                            <path
                                d="M17.3867 22.1119L27.2305 16.4869L26.5555 15.1932L16.7117 20.9869L17.3867 22.1119ZM16.7117 22.1119L26.5555 27.9057L27.2305 26.6119L17.3867 20.9869L16.7117 22.1119ZM19.8617 21.5494C19.8617 20.0307 18.6242 18.7369 17.0492 18.7369C15.5305 18.7369 14.293 19.9744 14.293 21.5494C14.293 23.0682 15.5305 24.3057 17.0492 24.3057C18.6242 24.3057 19.8617 23.0682 19.8617 21.5494ZM29.7055 15.8682C29.7055 14.3494 28.468 13.0557 26.893 13.0557C25.3742 13.0557 24.1367 14.2932 24.1367 15.8682C24.1367 17.3869 25.3742 18.6244 26.893 18.6244C28.468 18.6244 29.7055 17.3869 29.7055 15.8682ZM29.7055 27.2307C29.7055 25.7119 28.468 24.4182 26.893 24.4182C25.3742 24.4182 24.1367 25.6557 24.1367 27.2307C24.1367 28.7494 25.3742 29.9869 26.893 29.9869C28.468 30.0432 29.7055 28.7494 29.7055 27.2307Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_385_766">
                                <rect width="20" height="18" fill="white" transform="translate(12 12.5493)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <Button color="warning">21.05.2023</Button>
                    <Image className="new-product-img" src={backImg} alt="logo"/>
                    <p><span>| </span> {"Protests began in Iran's Kurdish region and spread across the country"}</p>
                    <h6>By Sa’dulla Kobiljonov</h6>
                    <p>Arif Holding Social manager</p>
                    <div></div>
                    <p>{"More than 500 protesters, including 69 children, have been killed, according to the Human" +
                        " Rights Activists' News Agency (HRANA). Two protesters have been executed and at least 26 " +
                        "others face the same fate, after what Amnesty International calls \"sham trials\"."}</p>
                    <p>{"Although nationwide demonstrations have swept Iran before - once in 2017 lasting until early " +
                        "2018, and another in November 2019 - the current protests are unique, as they involve people " +
                        "from across society and women are taking a lead role under the slogan \"Woman, Life, Freedom\"."}</p>
                    <p>{"Some Iranian celebrities have taken irrevocable steps to support protests, leading to" +
                        " their arrest or exile."}</p>
                    <p>{"Taraneh Alidoosti, a well-known Iranian actress, is being held in the notorious Evin prison " +
                        "after she condemned the execution of a young protester. Previously, she published a photo of " +
                        "herself without a mandatory headscarf, holding a sign with the protesters' slogan."}</p>
                    <p>{"\"I have worked with Taraneh on four films and now she is in prison for her rightful support" +
                        " of her fellow countrymen and her opposition to the unjust sentences being issued,\" Asghar " +
                        "Farhadi, who directed Alidoosti in his Oscar-winning film The Salesman, wrote on Instagram."}</p>
                    <h5>Boshqa yangiliklar</h5>
                </div>
                <Products data={data}/>
                <div className="new_product_footer"></div>
            </div>
        </>
    );
}

export default NewProduct;