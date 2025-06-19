import {
  Bgmodal,
  Container,
  ContainerItem,
  OurSucces,
  OurSuccesitem1,
  OurSuccesitem2,
  Title
} from "./homestyle";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import homeImg from '../../assets/test.png';
import { getNotify } from "../../hooks/notify";

const TotalItem = ({ end, label, suffix }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="total" ref={ref}>
      <h1>
        {inView ? (
          <CountUp end={end} duration={2} separator="," suffix={suffix || "+"} />
        ) : (
          "0"
        )}
      </h1>
      <p>{label}</p>
    </div>
  );
};

export default function HomeHeader() {

  return (
    <>
      <Container>
        <Bgmodal />
        <ContainerItem data-aos='fade-right' data-aos-duration='300'>
          <Title>
            <span>Taraqqiyot</span> o'quv markaziga xush kelibsiz
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et possimus eum quia, neque ipsam nihil
            laudantium, perspiciatis dolores aut enim porro commodi asperiores necessitatibus sunt. Numquam architecto
            ipsum voluptatibus cum?
          </p>
          <button>Bizga qo'shiling</button>
        </ContainerItem>
        <ContainerItem data-aos='fade-left' data-aos-duration='400'>
          <img src={homeImg} alt="home img" />
        </ContainerItem>
      </Container>

      <OurSucces>
        <OurSuccesitem1>
          <h1>Bizning Yutuqlarimiz</h1>
          <p>
            Taraqqiyot o‘quv markazi sifatli ta’lim, zamonaviy metodika va tajribali
            o‘qituvchilari bilan o‘quvchilarning rivojlanishiga ulkan hissa qo‘shib
            kelmoqda. Har bir o‘quvchining muvaffaqiyati — bu bizning yutug‘imiz.
          </p>
        </OurSuccesitem1>

        <OurSuccesitem2>
          <TotalItem end={1600} label="O‘quvchilar" />
          <TotalItem end={1450} label="Muvaffaqiyatli bitiruvchilar" />
          <TotalItem end={25} label="Kurs yo‘nalishlari" />
          <TotalItem end={20} label="Tajribali ustozlar" />
          <TotalItem end={5} label="Ta’lim tajribasi" suffix=" yil" />
        </OurSuccesitem2>
      </OurSucces>
    </>
  );
}
