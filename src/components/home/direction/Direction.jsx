import React from 'react';
import { Card, Cards, Info, Wrapper } from './style';

function Direction() {
    const cardsData = [
        {
            id: 1,
            title: "IT",
            desc: "Zamonaviy dasturlash tillari, web va mobil ilovalar yaratish, va raqamli dunyoda mustahkam bilimga ega bo'lish imkoniyati."
        },
        {
            id: 2,
            title: "Ingliz tili",
            desc: "Xalqaro darajadagi ingliz tilini o‘rganish orqali ta’lim, ish va sayohat imkoniyatlaringizni kengaytiring."
        },
        {
            id: 3,
            title: "Arab tili",
            desc: "Islomiy bilimlar, tarjima va xalqaro aloqalar uchun arab tilini mukammal darajada o‘rganing."
        },
        {
            id: 4,
            title: "Turk tili",
            desc: "Qardosh turk xalqlari bilan aloqa o‘rnatish, aloqa o‘rnatish, aloqa o‘rnatish,  ta’lim olish va ishlash uchun turk tilini o‘zlashtiring."
        },
        {
            id: 5,
            title: "Robototexnika",
            desc: "Amaliy bilim va texnologiyalar asosida robotlar yaratishni o‘rganing va kelajak kasblariga tayyor bo‘ling."
        },
        {
            id: 6,
            title: "Matematika",
            desc: "Mantiqiy fikrlash, muammolarni hal qilish va oliy ta’limga tayyorgarlik uchun chuqur matematik bilimlar."
        },
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

            <Cards>
                {cardsData.length > 0 ? cardsData.map((item) => (
                    <Card data-aos="fade-up" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </Card>
                )) : <p>Malumotlar mavjud emas</p>}
            </Cards>
         
        </Wrapper>
    );
}

export default Direction;
