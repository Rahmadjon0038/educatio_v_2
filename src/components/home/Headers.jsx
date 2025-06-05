import { Bgmodal, Container, ContainerItem, OurSucces, OurSuccesitem1, OurSuccesitem2, Title } from "./homestyle"
import CountUp from 'react-countup';
import homeImg from '../../assets/test.png'
import { toast } from "react-toastify";
import { getNotify } from "../../hooks/notify";
export default function HomeHeader() {
  const notify = getNotify()
  return (
    <>
      <Container>
        <Bgmodal></Bgmodal>
        <ContainerItem>
          <Title><span onClick={() => notify('ok','salom bro')}>Taraqqiyot</span> o'quv markaziga xush kelibsiz</Title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et possimus eum quia, neque ipsam nihil laudantium, perspiciatis dolores aut enim porro commodi asperiores necessitatibus sunt. Numquam architecto ipsum voluptatibus cum?</p>
          <button>Bizga qo'shiling</button>
        </ContainerItem>
        <ContainerItem>
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
          <div className="total">
            <h1>
              <CountUp end={1600} duration={2} separator="," />+
            </h1>
            <p>O‘quvchilar</p>
          </div>

          <div className="total">
            <h1>
              <CountUp end={1450} duration={2} separator="," />+
            </h1>
            <p>Muvaffaqiyatli bitiruvchilar</p>
          </div>

          <div className="total">
            <h1>
              <CountUp end={25} duration={2} separator="," />+
            </h1>
            <p>Kurs yo‘nalishlari</p>
          </div>

          <div className="total">
            <h1>
              <CountUp end={20} duration={2} separator="," />+
            </h1>
            <p>Tajribali ustozlar</p>
          </div>

          <div className="total">
            <h1>
              <CountUp end={5} duration={2} separator="," /> yil
            </h1>
            <p>Ta’lim tajribasi</p>
          </div>
        </OurSuccesitem2>
      </OurSucces>

    </>
  )
}
