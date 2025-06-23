import React, { useState } from "react";
import {
  Container,
  Title,
  NewsGrid,
  NewsCard,
  Image,
  Info,
  DateText,
  NewsTitle,
  Summary,
  Button,
  SelectedNews,
} from "./style";
import { motion, AnimatePresence } from "framer-motion";
import image from "../../../assets/regis.jpg";
import { FaArrowRight } from "react-icons/fa6";

const newsData = [
  {
    id: 1,
    title: "Frontend kursi bitiruvchilari diplom oldi!",
    date: "15-iyun 2025",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
    summary:
      "Frontend kursimizni 30+ o‘quvchi muvaffaqiyatli yakunlab, diplomlarini olishdi. Ular React, JavaScript, Tailwind kabi texnologiyalarni chuqur o‘rganib, amaliy loyiha qilish orqali o‘z bilimlarini mustahkamlashdi.",
  },
  {
    id: 2,
    title: "Yangi kurs: Python va AI boshlanmoqda",
    date: "12-iyun 2025",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240123150734/Python-AI--(1).webp",
    summary:
      "Yangi bosqichli Python kursimiz orqali AI asoslarini o‘rganing. Darslar mashinalarni o‘qitish, data analiz va real hayotdagi muammolarga yechim topish yo‘nalishlarida olib boriladi.",
  },
  {
    id: 3,
    title: "Arab tili olimpiadasida 1-o‘rin!",
    date: "5-iyun 2025",
    image: image,
    summary:
      "Bizning o‘quvchimiz viloyat bo‘yicha arab tili tanlovida g‘olib bo‘ldi. U mustahkam bilimlari va ijodiy yondashuvi bilan barcha bosqichlarda yetakchilik qildi.",
  },
  {
    id: 4,
    title: "Grafik dizayn bo‘yicha master-klass o‘tkazildi",
    date: "2-iyun 2025",
    image: "https://img.freepik.com/free-photo/digital-art-graphic-designer-using-pen-tablet-editing-photo-computer_53876-122784.jpg",
    summary:
      "Professional dizayner ishtirokida master-klass o‘tkazilib, ishtirokchilar amaliy bilimga ega bo‘lishdi. Dars davomida zamonaviy dizayn trendlari, Figma va Adobe Illustrator bilan ishlash usullari o‘rgatildi.",
  },
];

const NewsPreview = () => {
  const [select, setSelected] = useState(newsData[0]);

  const handleSelect = (newsItem) => {
    setSelected(newsItem);
  };

  return (
    <Container>
      <Title>So‘nggi yangiliklar</Title>
      <NewsGrid>
        <AnimatePresence mode="wait">
          <motion.div
            key={select.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}>
            <SelectedNews>
              <img src={select?.image} alt="yangilik" />
              <Info>
                <DateText>{select?.date}</DateText>
                <NewsTitle>{select?.title}</NewsTitle>
                <Summary>{select?.summary}</Summary>
              </Info>
            </SelectedNews>
          </motion.div>
        </AnimatePresence>

        <div>
          {newsData.map(({ id, title, date, image, summary }) => (
            <NewsCard
              key={id}
              onClick={() => handleSelect({ id, title, date, image, summary })}>
              <div className="imgBox">
                <Image src={image} alt={title} />
              </div>
              <Info>
                <DateText>{date}</DateText>
                <NewsTitle>{title}</NewsTitle>
                <Summary>
                  {summary.split(' ').slice(0, 12).join(' ')}... <br />
                  <span>batafsil o'qish</span>
                </Summary>
              </Info>
            </NewsCard>
          ))}
          <Button >Barcha yangiliklar <FaArrowRight /></Button>
        </div>
      </NewsGrid>
    </Container>
  );
};

export default NewsPreview;
