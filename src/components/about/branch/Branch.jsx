import React from 'react'
import { Container, Title, Description, BranchList, BranchCard, MapWrapper, Info } from './style'

const branches = [
  {
    name: "Asaka Filiali",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.8978065375436!2d71.5854319852968!3d41.00716309860096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4d79224d84cd%3A0xe0955cee2e887b2!2sTaraqqiyot%20o%E2%80%98quv%20markazi!5e1!3m2!1sen!2s!4v1750932801330!5m2!1sen!2s",
    address: "Asaka tumani, Taraqqiyot ko'chasi 12-uy",
    phone: "+998 91 123 45 67",
    time: "Dushanba–Shanba (09:00 – 18:00)"
  },
  {
    name: "Andijon Shahar Filiali",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.2602918121987!2d72.34750191525577!3d40.78338577932469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb81d71dcf9be3%3A0x3dd1c9d7f3d614c7!2sAndijon!5e1!3m2!1sen!2s!4v1750938000000!5m2!1sen!2s",
    address: "Andijon shahar, Mustaqillik ko‘chasi 45-uy",
    phone: "+998 90 987 65 43",
    time: "Dushanba–Juma (08:30 – 17:30)"
  },
  {
    name: "Xonobod Filiali",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.328052232775!2d72.00156061525894!3d40.905662879315864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc8ff28d6cb5c5%3A0xe906ab6884e7e397!2sXonobod!5e1!3m2!1sen!2s!4v1750939000000!5m2!1sen!2s",
    address: "Xonobod shahar, Alisher Navoiy ko‘chasi 17-uy",
    phone: "+998 94 654 32 10",
    time: "Har kuni (09:00 – 19:00)"
  }
];

function Branch() {
  return (
    <Container>
      <Title>Bizning Filiallar</Title>
      <Description>
        Quyida bizning barcha filiallarimiz joylashuvi, aloqa ma’lumotlari va ish
        vaqti haqida batafsil ma’lumot berilgan.
      </Description>

      <BranchList>
        {branches.map((branch, index) => (
          <BranchCard key={index}>
            <MapWrapper>
              <iframe
                src={branch.mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapWrapper>
            <Info>
              <h3>{branch.name}</h3>
              <p><strong>Manzil:</strong> {branch.address}</p>
              <p><strong>Telefon:</strong> {branch.phone}</p>
              <p><strong>Ish vaqti:</strong> {branch.time}</p>
            </Info>
          </BranchCard>
        ))}
      </BranchList>
    </Container>
  )
}

export default Branch
