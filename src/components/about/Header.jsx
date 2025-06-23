import { HeaderCard, Wrapper } from './style';
import aboutImage from '../../assets/regis.jpg'
function Header() {
  return (
    <>
      <Wrapper>
        <HeaderCard data-aos='fade-up'  data-aos-duration="500">
          <h2>Biz haqimizda</h2>
          <p>Taraqqiyot — bu ilmga chanqoq yoshlar uchun mo‘ljallangan o‘quv markazi. Biz o‘quvchilarimizga zamonaviy bilimlarni sifatli va tushunarli tarzda o‘rgatamiz.
            Markazimizda tajribali va mehribon ustozlar faoliyat yuritadi. Har bir darsimiz interaktiv, tushunarli va natijaga yo‘naltirilgan.
            Bizning maqsadimiz — bilimli, o‘z fikriga ega, maqsadli yoshlarni tarbiyalash. Markazimizda siz nafaqat o‘qish, balki o‘z ustingizda ishlash, motivatsiyaga ega bo‘lish va kelajakda yuksak natijalarga erishishni o‘rganasiz.
          </p>
        </HeaderCard>
        <HeaderCard data-aos="fade-up"  data-aos-duration="1000">
          <img src={aboutImage} alt="image" />
        </HeaderCard>
      </Wrapper>

      <Wrapper padding={'50px 100px'} bg={'white'}>
        <HeaderCard data-aos='fade-up'  data-aos-duration="500">
          <img src={aboutImage} alt="image" />
        </HeaderCard>
        <HeaderCard data-aos="fade-up"  data-aos-duration="1000">
          <h2>Bizning missiyamiz</h2>
          <p>
            Taraqqiyot o‘quv markazining asosiy missiyasi — zamonaviy bilimlarni har bir o‘quvchiga yetkazish, ularning fikrlash doirasini kengaytirish va ularni hayotda faol, maqsadli shaxsga aylantirishdir.

            Biz yoshlarning orzularini qo‘llab-quvvatlaymiz, ularga mustahkam bilim asosini yaratib beramiz. Har bir o‘quvchimizga individual yondashamiz va ularning o‘ziga xos qobiliyatlarini ro‘yobga chiqarishga ko‘maklashamiz.

            Taraqqiyot — bu shunchaki o‘quv markazi emas, bu – o‘zgarishlar, o‘sish va muvaffaqiyat sari ilk qadamingiz!
          </p>

        </HeaderCard>

      </Wrapper>

      <Wrapper padding={'50px 100px'} bg={'white'}>
        <HeaderCard  data-aos="fade-up" data-aos-duration="500">
          <h2>Bizning tariximiz</h2>
          <p>
            Taraqqiyot o‘quv markazi 2021-yilda bir guruh fidoyi ustozlar tomonidan tashkil etilgan. Boshlanishda faqat bir nechta o‘quvchi va kichik xona bilan yo‘lga qo‘yilgan bu markaz bugungi kunda yuzlab o‘quvchilarga sifatli ta’lim berayotgan muassasaga aylandi.

            Biz ilk kunlardanoq bilimga chanqoq yoshlar uchun eng qulay va tushunarli ta’lim tizimini yaratishni o‘z oldimizga maqsad qilganmiz. Har bir bosib o‘tilgan qadam – mehnat, fidoyilik va ishonch mevasidir.

            Bugun Taraqqiyot — bu zamonaviy texnologiyalar bilan boyitilgan ta’lim, tajribali ustozlar va natijaga yo‘naltirilgan darslar markazi. Bu bizning tariximiz, bu sizning imkoniyatingiz!
          </p>

        </HeaderCard>
        <HeaderCard data-aos="fade-up" data-aos-duration="1000">
          <img src={aboutImage} alt="image" />
        </HeaderCard>
      </Wrapper>
    </>
  );
}

export default Header;
