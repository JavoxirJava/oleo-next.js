import React from 'react';
import {Button} from "reactstrap";
import Link from "next/link";

function Path() {
    return (
        <>
            <div className="p-path-info">
                <Button>
                    <i className="bi bi-arrow-left-short">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor"
                             className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M12 8a.5.5 0
                                       1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </i><p className="d-inline ms-2 me-3 home-button-in-p">Orqaga</p>
                </Button>
                <Link href="/">Home page</Link>
                <Link href="/products">Mahsulotlarimiz</Link>/
                <Link href="/products">Oleo saryog’i</Link>
            </div>
        </>
    );
}

export default Path;