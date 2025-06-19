import React from "react";
import { Container, Title, CardWrapper, Card, Avatar, Name, Comment } from "./style";

const testimonials = [
  {
    id: 1,
    name: "Olimjon T.",
    image: "https://i.pravatar.cc/100?img=1",
    comment: "Bu markazda o‘qib hayotim o‘zgardi! Ustozlar juda professional.",
    bgcolor: "orange"
  },
  {
    id: 2,
    name: "Maftuna A.",
    image: "https://i.pravatar.cc/100?img=2",
    comment: "Men bu yerda IT’ni o‘rgandim va endi freelance qilaman!",
    bgcolor: "#4190FF"
  },
  {
    id: 3,
    name: "Jahongir M.",
    image: "https://i.pravatar.cc/100?img17",
    comment: "Arab tili kurslari juda samarali, darslar tushunarli va qulay.",
    bgcolor: "#A992FF"
  },
  {
    id: 4,
    name: "Dilnoza R.",
    image: "https://i.pravatar.cc/100?img=4",
    comment: "Dasturlash kurslari tufayli orzuimdagi kasbni tanladim!",
    bgcolor: "#00C49F"
  },
  {
    id: 5,
    name: "Sardor B.",
    image: "https://i.pravatar.cc/100?img=5",
    comment: "Bu yerda bilim olish motivatsiya bilan birga keladi!",
    bgcolor: "#FFBB28"
  },
  {
    id: 6,
    name: "Ziyoda H.",
    image: "https://i.pravatar.cc/100?img=12",
    comment: "Ustozlarning yondashuvi zamonaviy va juda tushunarli.",
    bgcolor: "#FF6F91"
  }
];


const Testimonials = () => {
  return (
    <Container id="testimonials">
      <Title>Talabalarimiz fikrlari</Title>
      <CardWrapper>
        {testimonials.map(({ id, name, image, comment, bgcolor }) => (
          <Card key={id} bgcolor={bgcolor}>
            <h1>‘‘</h1>
            <div>
              <Name>{name}</Name>
              <Comment>“{comment}”</Comment>
            </div>
            <Avatar src={image} alt={name} />
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Testimonials;
