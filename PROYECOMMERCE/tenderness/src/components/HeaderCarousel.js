import { Carousel  } from "react-bootstrap";

import header1  from "../imagenes/categoria3.png"
import header2  from "../imagenes/categoria2.svg";
import header3  from "../imagenes/categoria1.svg";
import header4  from "../imagenes/categoria4.png";
import header5  from "../imagenes/categoria5.svg";

export default function HeaderCarousel() {
    
    return (
            <div className = "contenedorcarousel">
            <Carousel className = "carousel-control-next-icon:after" >
                <Carousel.Item  className = "carouselitem">
                    <img
                        
                        src={header1}
                        alt="header1"
                        className="d-block w-100"
                        //style={{ objectFit: "cover", height: "100%", transform: "translateY(-850px)" }}*//
                        width =  "600px"
                        height =  "300px"
                    />
                </Carousel.Item>
                <Carousel.Item  className = "carouselitem">
                    <img
                        src={header2}
                        alt="header2"
                        className="d-block w-100"
                  
                        width =  "600px"
                        height =  "300px"
                    />
                </Carousel.Item>
                <Carousel.Item  className = "carouselitem"> 
                    <img
                        src={header3}
                        alt="header3"
                        className="d-block w-100"
                        width =  "600px"
                        height =  "300px"
                    />
                </Carousel.Item>
                <Carousel.Item  className = "carouselitem"> 
                    <img
                        src={header4}
                        alt="header4"
                        className="d-block w-100"
                        width =  "600px"
                        height =  "300px"
                    />
                </Carousel.Item>
                <Carousel.Item  className = "carouselitem"> 
                    <img
                        src={header5}
                        alt="header5"
                        className="d-block w-100"
                        width =  "600px"
                        height =  "300px"
                    />
                </Carousel.Item>
 
               
            </Carousel>
            </div>
    );
}