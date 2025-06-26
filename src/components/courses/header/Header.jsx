import React, { useState } from 'react';
import {
  Wrapper,
  Grid,
  Card,
  Banner,
  Content,
  Title,
  Teacher,
  BottomInfo,
  Badge,
  PriceBlock,
  FilterWrapper,
  FilterButton
} from './style';

import { FaRegClock, FaRegListAlt, FaUser } from "react-icons/fa";

const defaultBanner = 'https://wallpapers.com/images/high/4d-ultra-hd-blue-space-z8q8d1d7d1ja4b92.webp';
const defaultAvatar = 'https://wallpapers.com/images/high/justin-haley-wearing-sunglasses-qc0kzkrux9kh28a8.webp';

const courses = [
  {
    id: 1,
    title: "Frontend Dasturlash",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Next.js"],
    newPrice: "450 ming so'm",
    teacherName: "John Smith",
    teacherImage: "",
    banner: "",
    duration: "1 soat 30 minut",
    students: 12,
    lessons: 9,
    desc: "Zamonaviy veb-saytlar yaratish asoslari: HTML, CSS va JavaScript’dan tortib React va Next.js gacha – barchasi bir kursda!"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    category: "Fullstack",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    newPrice: "500 ming so'm",
    teacherName: "David Miller",
    teacherImage: "",
    banner: "",
    duration: "3 soat 20 minut",
    students: 48,
    lessons: 12,
    desc: "Frontend va backend’ni to‘liq o‘rganing. MERN stack yordamida zamonaviy veb ilovalar yarating."
  },
  {
    id: 3,
    title: "Ingliz tili – Boshlang‘ich daraja",
    category: "Tillar",
    tags: ["Grammar", "Speaking", "Listening", "IELTS"],
    newPrice: "300 ming so'm",
    teacherName: "Emma Watson",
    teacherImage: "",
    banner: "",
    duration: "2 soat",
    students: 35,
    lessons: 10,
    desc: "Xalqaro muloqotda ishtirok etish va global imkoniyatlar eshigini ochish uchun ingliz tilini o‘rganing."
  },
  {
    id: 4,
    title: "Matematika Asoslari",
    category: "Matematika",
    tags: ["Algebra", "Geometriya", "Funksiyalar", "Hisoblash"],
    newPrice: "250 ming so'm",
    teacherName: "Bobur Karimov",
    teacherImage: "",
    banner: "",
    duration: "1 soat 45 minut",
    students: 28,
    lessons: 8,
    desc: "Matematik bilimlaringizni mustahkamlang. Algebra va geometriya asoslari oddiy va tushunarli usulda."
  },
  {
    id: 5,
    title: "Avtomatlashtirilgan Testlash (Autotest)",
    category: "QA / Test",
    tags: ["Selenium", "Cypress", "Test Automation", "QA"],
    newPrice: "470 ming so'm",
    teacherName: "Kamola Azizova",
    teacherImage: "",
    banner: "",
    duration: "2 soat 10 minut",
    students: 19,
    lessons: 6,
    desc: "Sifatni nazorat qilish va testlarni avtomatlashtirishni o‘rganing. Selenium va Cypress bilan real amaliyotlar."
  },
  {
    id: 6,
    title: "Grafik Dizayn Asoslari",
    category: "Dizayn",
    tags: ["Photoshop", "Illustrator", "Figma", "UI/UX"],
    newPrice: "350 ming so'm",
    teacherName: "Laylo Qodirova",
    teacherImage: "",
    banner: "",
    duration: "2 soat",
    students: 21,
    lessons: 7,
    desc: "Grafik dizaynning asosiy tushunchalari, Figma va Adobe dasturlari bilan amaliy ishlash."
  },
  {
    id: 7,
    title: "Backend Dasturlash – Node.js",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "JWT"],
    newPrice: "400 ming so'm",
    teacherName: "Ali Valiyev",
    teacherImage: "",
    banner: "",
    duration: "2 soat 45 minut",
    students: 25,
    lessons: 11,
    desc: "Node.js va Express bilan server tomon dasturlashni chuqur o‘rganing. APIlar yaratish va autentifikatsiya."
  },
  {
    id: 8,
    title: "Biznes va Startup Asoslari",
    category: "Biznes",
    tags: ["Marketing", "Startup", "Strategy", "Finance"],
    newPrice: "320 ming so'm",
    teacherName: "Aziz Abduvaliyev",
    teacherImage: "",
    banner: "",
    duration: "1 soat 30 minut",
    students: 31,
    lessons: 9,
    desc: "O‘z biznesingizni boshlash uchun zarur bilimlar. Raqobat, moliya va strategiyani o‘rganing."
  },
  {
    id: 9,
    title: "Sun'iy Intellekt Asoslari",
    category: "AI / ML",
    tags: ["AI", "Machine Learning", "Python", "Data"],
    newPrice: "600 ming so'm",
    teacherName: "Prof. Anvar Mahmudov",
    teacherImage: "",
    banner: "",
    duration: "4 soat",
    students: 15,
    lessons: 14,
    desc: "Sun'iy intellekt va mashinaviy o‘rganish asoslari. Real datasetlar bilan amaliy mashg‘ulotlar."
  },
  {
    id: 10,
    title: "Mobil Ilova Dasturlash (Flutter)",
    category: "Mobil",
    tags: ["Flutter", "Dart", "Mobile App", "Firebase"],
    newPrice: "550 ming so'm",
    teacherName: "Dilshod Sattorov",
    teacherImage: "",
    banner: "",
    duration: "3 soat",
    students: 18,
    lessons: 10,
    desc: "Android va iOS uchun mobil ilovalarni Flutter bilan yaratishni o‘rganing. Firebase bilan integratsiya."
  },
  {
    id: 11,
    title: "Ijtimoiy Tarmoqlar Marketingi (SMM)",
    category: "Marketing",
    tags: ["Instagram", "Facebook", "SMM", "Reklama"],
    newPrice: "280 ming so'm",
    teacherName: "Ziyoda Ergasheva",
    teacherImage: "",
    banner: "",
    duration: "1 soat 15 minut",
    students: 40,
    lessons: 5,
    desc: "Instagram, Facebook va boshqa platformalarda biznesingizni reklama qilishni o‘rganing."
  },
  {
    id: 12,
    title: "React.js Bilan Dynamic Veb Ilovalar",
    category: "Frontend",
    tags: ["React", "Hooks", "Router", "API"],
    newPrice: "480 ming so'm",
    teacherName: "Javlon Umarov",
    teacherImage: "",
    banner: "",
    duration: "2 soat 20 minut",
    students: 30,
    lessons: 10,
    desc: "React bilan zamonaviy SPA (Single Page App) ilovalarni yaratishni amaliy ko‘rinishda o‘rganing."
  }
];
const categories = ["Barchasi", "Frontend", "Fullstack", "Tillar", "QA / Test", "Matematika", "Dizayn", "Backend", "Biznes", "AI / ML", "Mobil", "Marketing"];

function CourseList() {
  const [activeCategory, setActiveCategory] = useState('Barchasi');

  const onCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredCourses =
    activeCategory === 'Barchasi'
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <Wrapper>
      <h1 className='section-title'>📚 Kurslarimiz</h1>

      <FilterWrapper>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}>
            {category}
          </FilterButton>
        ))}
      </FilterWrapper>

      <Grid>
        {filteredCourses.map(course => (
          <Card key={course.id}>
            <Banner src={course.banner || defaultBanner} alt={course.title} />
            <Content>
              <Title>{course.title}</Title>

              <div className="tags">
                {course.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>

              <Teacher>
                <img src={course.teacherImage || defaultAvatar} alt={course.teacherName} />
                <div><strong>Ustoz: {course.teacherName}</strong></div>
              </Teacher>

              <PriceBlock>
                <strong>Narxi:</strong> {course.newPrice}
              </PriceBlock>

              <BottomInfo>
                <div><FaRegListAlt /> {course.lessons} dars</div>
                <div><FaUser /> {course.students} o‘quvchi</div>
              </BottomInfo>

              <div className="rating">
                <FaRegClock /> Dars vaqti: {course.duration}
              </div>
            </Content>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default CourseList;
