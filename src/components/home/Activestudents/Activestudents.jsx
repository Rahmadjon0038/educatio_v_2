import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Cards, Wrapper } from "./style";
import image from '../../../assets/regis.jpg'
import { useActiveSudents } from "../../../hooks/useStudent";

function Activestudents() {

    const { data, isLoading } = useActiveSudents()
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,

    };

    return (
        <Wrapper className="slider-container">
            <h1>Bizning faol <span>Talabalarimiz</span></h1>
            <p className="subtitle">Iyun oyining faol talabalari</p>
            <Slider {...settings}>
                {data?.map((item) => (
                    <Cards key={item?.id}>
                        <Card>
                            <img
                                src={item?.images?.replace('/upload/', '/upload/f_auto,q_auto/')}
                                alt="image"
                                loading="lazy"
                            />

                            <h3>{item?.username} {item?.firstname}</h3>
                            <p>{item?.desc}</p>
                        </Card>
                    </Cards>
                ))}

            </Slider>
        </Wrapper>
    )
}

export default Activestudents