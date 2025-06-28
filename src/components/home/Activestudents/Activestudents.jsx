import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Cards, Wrapper } from "./style";
import image from '../../../assets/regis.jpg'
import { useActiveSudents } from "../../../hooks/useStudent";

function Activestudents() {

    const { data, isLoading } = useActiveSudents()
    console.log(data)
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

    // const studentsData = [
    //     {
    //         id: 1,
    //         name: "Ali",
    //         surname: "Karimov",
    //         image: 'https://wallpapers.com/images/high/nfs-4te9xid3fyoph71s.webp',
    //         achievement: "IT yo'nalishida React va Node.js bo‘yicha mukofotlangan. ukofotlangan. ukofotlangan. ukofotlangan. ukofotlangan.",
    //     },
    //     {
    //         id: 2,
    //         name: "Laylo",
    //         surname: "Usmonova",
    //         image: "https://wallpapers.com/images/high/nfs-6nzsvrrd76bch0oa.webp",
    //         achievement: "Ingliz tili fanidan IELTS 8.0 ball natijasi bilan ajralib turdi.",
    //     },
    //     {
    //         id: 3,
    //         name: "Jamshid",
    //         surname: "Nematov",
    //         image: "https://wallpapers.com/images/high/nfs-9jjr10vknrasbdki.webp",
    //         achievement: "Arab tili bo‘yicha Qur'on tilovat tanlovida 1-o‘rinni egalladi.",
    //     },
    //     {
    //         id: 4,
    //         name: "Zilola",
    //         surname: "Bekova",
    //         image: "https://wallpapers.com/images/high/nfs-n66m45dord3hrzr0.webp",
    //         achievement: "Turk tili olimpiadasida respublika bosqichida g‘olib bo‘ldi.",
    //     },
    //     {
    //         id: 5,
    //         name: "Sherzod",
    //         surname: "To‘xtayev",
    //         image: "https://wallpapers.com/images/high/nfs-ubb58tgtmln675a3.webp",
    //         achievement: "Robototexnika yo‘nalishida sun’iy intellektga asoslangan robot yaratdi.",
    //     },
    //     {
    //         id: 6,
    //         name: "Madina",
    //         surname: "Rasulova",
    //         image: "https://wallpapers.com/images/high/nfs-n1014zu4hgzhntvl.webp",
    //         achievement: "Matematika fanidan xalqaro olimpiadada bronza medalini qo‘lga kiritdi.",
    //     },
    // ];

    return (
        <Wrapper className="slider-container">
            <h1>Bizning faol <span>Talabalarimiz</span></h1>
            <p className="subtitle">Iyun oyining faol talabalari</p>
            <Slider {...settings}>
                {data?.map((item) => (
                    <Cards key={item?.id}>
                        <Card>
                            <img src={item?.images} alt="image" />
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