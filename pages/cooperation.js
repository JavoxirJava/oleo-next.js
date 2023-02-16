import img_1 from "@/public/img_1.png";
import Image from "next/image";
import Path from "@/component/path";
import cooperationImg1 from "@/public/cooperationImg1.png";
import telegramImg from "@/public/telegramImg.png";
import cooperationEllipse from "@/public/cooperationEllipse.png";
import cooperationFed from "@/public/cooperationFed.png";
import cooperationEx from "@/public/cooperationEx.png";
import cooperationEnatcar1 from "@/public/cooperationEnatcar1.png";
import cooperationEnatcar2 from "@/public/cooperationEnatcar2.png";
import cooperationEnatcar3 from "@/public/cooperationEnatcar3.png";
import {Button} from "reactstrap";
import Advantage from "@/component/advantage";

function Cooperation(){
    return(
        <div>
            <Path/>
            <div className="cooperation-page">

            <div className="cooperation-page1">
                <div className="cooperation-page1-block">
                    <h1>B2B<br/> hamkorligiga chaqiramiz</h1>
                    <p>
                        {`orem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five`}
                    </p>
                </div>
                <div className="cooperation-page1-block2">
                    <div className="cooperation-page1-block2-circle"/>
                    <Image src={img_1} alt="Cloud"/>
                </div>
                <div className="cooperation-page1-block3">
                    <Image  src={cooperationImg1} alt="Cloud"/>
                </div>
            </div>

                <div className="cooperation-page2">
                    <div>
                        <div className="cooperation-page2-text">
                            <h2>Nega biz bilan ishlashingiz kerak?</h2>
                        </div>
                        <div className="cooperation-page2-block1">
                            <p>biz bilan oson bog’laning va hamkorlikni boshlang</p>
                            <h6>HAR QANDAY MAHSULOT UCHUN</h6>
                            <h1>B2B</h1>
                        </div>
                        <div className="cooperation-page2-block2">
                            <p>Katta buyurtmalarni ham yetkazib bera olami oz vaqtida</p>
                            <h1>1T</h1>
                            <h6>Gacha kunlik ishlab chiqarish</h6>
                        </div>
                        <div className="cooperation-page2-block3">
                            <p>
                                {`orem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five1500s, when an unknown printer took a galley of`}
                            </p>
                            <a href="#">
                            <Button>Zayavka jonatish</Button>
                            <h3><Image src={telegramImg} alt="Cloud"/></h3>
                            </a>
                        </div>
                        <div className="cooperation-page2-block4">
                            <p>Qisqa vaqt ichida yetkazib beramiz. Kutib qolmaysiz</p>
                            <Image src={cooperationEllipse} alt="Cloud"/>
                            <h3>1 ish kuni</h3>
                        </div>
                    </div>
            </div>

                <div className="cooperation-page3">
                    <div>
                        <div className="cooperation-page3-text">
                            <h2>Bizga ishonch bildirgan kompaniyalar</h2>
                        </div>
                        <div className="cooperation-page3-block1">
                            <Button>
                                <h3>Nulltarif</h3>
                            </Button>
                        </div>
                        <div className="cooperation-page3-block2">
                            <Image className="cooperation-page3-block2-img1" src={cooperationFed} alt="Cloud"/>
                            <Image className='cooperation-page3-block2-img2' src={cooperationEx} alt="Cloud"/>
                        </div>
                        <div className="cooperation-page3-block3">
                            <Image className="cooperation-page3-block3-img1" src={cooperationEnatcar1} alt="Cloud"/>
                            <Image className="cooperation-page3-block3-img2" src={cooperationEnatcar2} alt="Cloud"/>
                            <Image className="cooperation-page3-block3-img3" src={cooperationEnatcar3} alt="Cloud"/>
                        </div>
                        <div className="cooperation-page3-block4">
                            <Button>
                                <h3>Nulltarif</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            <Advantage/>
        </div>
        </div>
    )
}
export default Cooperation;