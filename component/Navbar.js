import Link from "next/link";
import {Button} from "reactstrap";
import {byId, objById} from "@/component/api";
import {useEffect} from "react";
import Image from "next/image";
import oleo_logo from "@/public/oleo-logo.png";

function Navbar() {

    useEffect(() => {
        if (localStorage.getItem("lang")) {
            objById("lang").querySelectorAll("#lang option").forEach(opt => {
                if (opt.value === localStorage.getItem("lang")) opt.selected = true;
            });
        }
    }, []);

    function languageTan() {
        localStorage.setItem("lang", byId("lang"));
        window.location.reload();
    }

    return (
        <div style={{backgroundColor: "#D72A33", padding: ".3% 0"}}>
            <div style={{marginLeft: "16%"}}>
                <Image style={{marginRight: "5%", marginLeft: "-7%"}} src={oleo_logo} alt="oleo logo"/>
                <Link href="/#about" className="text-decoration-none text-warning">Biz haqimizda</Link>
                <Link href="/products" className="text-decoration-none text-warning ms-5">Mahsulotimiz</Link>
                <Link href="/news" className="text-decoration-none text-warning ms-5">Yangiliklar</Link>
                <Link href="/" className="text-decoration-none text-warning ms-5">Aloqa</Link>
                <Link href="/about" className="text-decoration-none text-warning ms-5">Nega biz</Link>
                <select onChange={languageTan} id="lang" className="form-select-sm d-inline text-warning border-warning" style={{width: "4%", height: "2%", backgroundColor: "#D72A33", marginLeft: "25%"}} aria-label=".form-select-sm example">
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
                <Button color="warning" size="sm" outline className="ms-5">93 818 81 77</Button>
            </div>

        </div>
    );
}

export default Navbar;