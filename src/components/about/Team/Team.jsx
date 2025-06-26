import React from 'react'
import { Container, Title, Teams, Card, TitleInfo } from './style'
import image from '../../../assets/avatar.png'
function Team() {

const teachers = [
    {
      name: "Rahmadjon Abdullayev",
      role: "IT teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-with-butterflies-in1o18ypm0iup10x.webp",
      info: "Tajribali dasturchi, web va mobil ilovalar yaratishda tajribaga ega.",
    },
    {
      name: "Shaxzoda Karimova",
      role: "English teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-within-a-triangle-b0rpn8v5s8e791vh.webp",
      info: "IELTS 8.0, interaktiv metodlar bilan o‘rgatadi.",
    },
    {
      name: "Javlon Bekmirzaev",
      role: "Math teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-kneeling-psykrii477qcrw8u.webp",
      info: "10 yillik tajriba, murakkab mavzularni oddiy qilib tushuntiradi.",
    },
    {
      name: "Dilnoza Alimova",
      role: "Physics teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-with-a-box-20ia8f8mac8rzfxe.webp",
      info: "Fizika bo‘yicha olimpiada g‘oliblarini tayyorlagan.",
    },
    {
      name: "Sardor Rasulov",
      role: "Chemistry teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-with-asteroids-x4e2bkyz36dvvijk.webp",
      info: "Eksperimentlar orqali kimyoni qiziqarli o‘rgatadi.",
    },
    {
      name: "Mavluda To‘xtaeva",
      role: "Biology teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-in-neon-city-f4zvgzj8tpw318sw.webp",
      info: "Tabiat fanlariga bo‘lgan muhabbatni uyg‘otadi.",
    },
    {
      name: "Rustam Karimov",
      role: "History teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-in-the-galaxy-29f4ijma7cx9tlef.webp",
      info: "Tarixni hikoya usulida tushuntiradi.",
    },
    {
      name: "Zilola Jo‘rayeva",
      role: "Uzbek language teacher",
      image: "https://wallpapers.com/images/high/neon-astronaut-exploring-iv8c1o3lvd48aznq.webp",
      info: "Ona tilining nozik jihatlarini mukammal o‘rgatadi.",
    },
    
  ]


  return (
    <Container>
      <Title>Bizning jamoamiz</Title>
      <p className='desc'>Bilim, tajriba va mehr — bizning jamoamizning asosiy tamoyillari. Ular bilan o‘rganish — maroqli va samarali!</p>

      <Teams>
        {teachers.map((teacher, index) => (
          <Card key={index}>
            <img src={teacher.image} alt={teacher.name} />
            <TitleInfo className="titleinfo">
              <strong>{teacher.name}</strong>
              <p>{teacher.role}</p>
            </TitleInfo>

            <div className="info">
              <p>{teacher.info}</p>
            </div>
          </Card>
        ))}

      </Teams>
    </Container>
  )
}

export default Team