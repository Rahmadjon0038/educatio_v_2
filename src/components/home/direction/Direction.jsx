import { Card, Cards, Info, Wrapper } from './style';
import image from '../../../assets/regis.jpg'
import MagneticHover from '../../MagneticHover';
import DefaultComponent from '../../DefaultComponent';
import LoaderScaletion from '../../loader/LoaderScaletion/LoaderScaletion';

function Direction() {
    const cardsData = [
        // {
        //     id: 1,
        //     title: "IT",
        //     desc: "Zamonaviy dasturlash tillari, web va mobil ilovalar yaratish orqali raqamli dunyoda yetakchi bo‘ling.",
        //     image: 'https://wallpapers.com/images/high/innovative-programmer-at-work-m3ds0nkinofzf2c7.webp',
        //     button: "IT yo'nalishini tanlash"
        // },
        // {
        //     id: 2,
        //     title: "Ingliz tili",
        //     desc: "Xalqaro muloqotda ishtirok etish va global imkoniyatlar eshigini ochish uchun ingliz tilini o‘rganing.",
        //     image: 'https://wallpapers.com/images/high/english-2000-x-1500-wallpaper-lrdtkuegpsvfrk4d.webp',
        //     button: "Ingliz tilini o‘rganing"
        // },
        // {
        //     id: 3,
        //     title: "Arab tili",
        //     desc: "Qur'on, hadis va islomiy ilmlarni chuqur anglash uchun arab tilini mukammal o‘rganing.",
        //     image: 'https://wallpapers.com/images/high/innovative-programmer-at-work-m3ds0nkinofzf2c7.webp',
        //     button: "Arab tilini o‘rganing"
        // },
        // {
        //     id: 4,
        //     title: "Turk tili",
        //     desc: "Qardosh xalqlar bilan muloqot qilish va Turkiyada o‘qish imkoniyatlarini kengaytiring.",
        //     image: 'https://wallpapers.com/images/hd/pink-sunset-in-istanbul-wallpaper-and-image-wallpaper-picture-ptu9h74h4de55swc.webp',
        //     button: "Turk tilini o‘zlashtiring"
        // },
        // {
        //     id: 5,
        //     title: "Robototexnika",
        //     desc: "Zamonaviy texnologiyalar olamiga sho‘ng‘ing va o‘zingizning robotlaringizni loyihalashtiring.",
        //     image: 'https://wallpapers.com/images/high/high-technologies-robot-eysyvjy9iqw72s2m.webp',
        //     button: "Robototexnikani boshlash"
        // },
        // {
        //     id: 6,
        //     title: "Matematika",
        //     desc: "Mantiqiy fikrlash va muammolarni hal qilis  qobiliyatini oshiring — kuchli poydevor bu yerda.",
        //     image: 'https://wallpapers.com/images/hd/math-symbols-in-orange-urukb380ueajtbvp.webp',
        //     button: "Matematikani o‘rganish"
        // },
    ];


    return (
        <Wrapper>
            <Info>
                <h1>Bizning <span>Yo'nalishlarimiz</span></h1>
                <p>
                    Taraqqiyot o‘quv markazi sizga zamonaviy va talabgir yo‘nalishlar bo‘yicha chuqur va sifatli ta’lim taklif etadi.
                    Har bir kurs amaliy mashg‘ulotlar, tajribali ustozlar va interaktiv metodikaga asoslangan bo‘lib, sizni yangi bilimlar sari yetaklaydi.
                    O‘z yo‘nalishingizni tanlang va kelajagingiz sari qadam tashlang!
                </p>
            </Info>

            {cardsData.length ? <Cards>
                {cardsData?.map((item) => (
                    <Card key={item.id}>
                        <div className="imgcard">
                            <img src={item?.image} alt="image" />
                        </div>
                        <div className='data'>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>Batafsil</button>
                        </div>
                    </Card>
                ))}
            </Cards> : <DefaultComponent text={'Kurslar xozircha mavjud emas'}/>}


        </Wrapper>
    );
}

export default Direction;
