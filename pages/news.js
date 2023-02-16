import React from 'react';
import {data} from "@/component/data";
import Path from "@/component/path";
import Products from "@/component/productsData";

function News() {
    return (
        <>
            <div className="news-king">
               <Path/>
                <div className="news-body">
                    <h2>Barcha yangiliklarimiz</h2>
                    <Products data={data}/>
                </div>
            </div>
        </>
    );
}

export default News;