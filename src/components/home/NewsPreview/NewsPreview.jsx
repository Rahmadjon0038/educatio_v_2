import React, { useState } from "react";
import { Container, Title, NewsGrid, NewsCard, Image, Info, DateText, NewsTitle, Summary, Button } from "./style";


import image from '../../../assets/regis.jpg'

const newsData = [
  {
    id: 1,
    title: "Frontend kursi bitiruvchilari diplom oldi!",
    date: "15-iyun 2025",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
    summary: "Frontend kursimizni 30+ o‘quvchi muvaffaqiyatli yakunlab, diplomlarini olishdi.",
  },
  {
    id: 2,
    title: "Yangi kurs: Python va AI boshlanmoqda",
    date: "12-iyun 2025",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240123150734/Python-AI--(1).webp",
    summary: "Yangi bosqichli Python kursimiz orqali AI asoslarini o‘rganing.",
  },
  {
    id: 3,
    title: "Arab tili olimpiadasida 1-o‘rin!",
    date: "5-iyun 2025",
    image: image,
    summary: "Bizning o‘quvchimiz viloyat bo‘yicha arab tili tanlovida g‘olib bo‘ldi.",
  },
  {
    id: 4,
    title: "Grafik dizayn bo‘yicha master-klass o‘tkazildi",
    date: "2-iyun 2025",
    image: "https://img.freepik.com/free-photo/digital-art-graphic-designer-using-pen-tablet-editing-photo-computer_53876-122784.jpg",
    summary: "Professional dizayner ishtirokida master-klass o‘tkazilib, ishtirokchilar amaliy bilimga ega bo‘lishdi.",
  },
  {
    id: 5,
    title: "IT bo‘yicha mentorlik dasturi boshlandi",
    date: "28-may 2025",
    image: image,
    summary: "Yangi mentorlik dasturi orqali o‘quvchilar soha mutaxassislari bilan ishlay boshlashdi.",
  },
  {
    id: 6,
    title: "Online test tizimi ishga tushirildi",
    date: "25-may 2025",
    image: image,
    summary: "O‘quvchilar bilimini sinovdan o‘tkazish uchun yangi test platformasi faoliyat boshladi.",
  }
];



const NewsPreview = () => {
  const [select, setSelected] = useState({
    id: 1,
    title: "Frontend kursi bitiruvchilari diplom oldi!",
    date: "15-iyun 2025",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
    summary: "Frontend kursimizni 30+ o‘quvchi muvaffaqiyatli yakunlab, diplomlarini olishdi.",
  },)


  return (
    <Container>
      <Title>So‘nggi yangiliklar</Title>
      <NewsGrid>
        <div>
          {/* <img src={select?.img} alt="" /> */}
          <h3>{select?.title}</h3>

        </div>
        <div>
          {newsData.map(({ id, title, date, image, summary }) => (
            <NewsCard key={id}>
              <div className="imgBox">
                <Image src={image} alt={title} />
              </div>
              <Info>
                <DateText>{date}</DateText>
                <NewsTitle>{title}</NewsTitle>
                <Summary>{summary}</Summary>
              </Info>
            </NewsCard>
          ))}
        </div>
      </NewsGrid>
      <Button href="/news">Barcha yangiliklar →</Button>
    </Container>
  );
};

export default NewsPreview;
