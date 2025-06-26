import React from 'react'
import { Newest, NewsTitle, Wrapper } from './style'
import avatar from '../../assets/avatar.png'

function Header() {
    return (
        <Wrapper>
            <NewsTitle>
                <h2>O'quv <span>markazimizda</span> bo'layotgan so'ngi yangiliklar bilan <br /> tanishib boring </h2>
            </NewsTitle>

            <Newest>
                <img className='banner' src="https://wallpapers.com/images/hd/blue-aesthetic-john-wick-movie-scene-hd-x0pj3j5v7gveove1.webp" alt="img" />
                <div className='right'>
                    <div className='answers'>
                        <img src={avatar} className='avatar' alt="logo" />
                        <p>admin. 12 minut oldin</p>
                    </div>
                    <h1 className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam repellendus vero dolorem exercitationem!</h1>
                    <p className='desc'>Good news 🙂
                        O’quv Markazimizda iyun oyidan boshlab oylikdan tashqari aniq belgilangan qo’shimcha BONUSLAR  tashkil qilinadi:

                        Bir sanada 2 va undan ortiq o’quvchilarini sertifikat (B1, B2, C1) natija qildirgan(sertifikatlar o’quv markaz qabulxonasiga aniq taqdim etilishi kerak) o’qituvchilar quyidagi usulda taqdirlanadi:

                        Umumiy stavka- 200 000 uzs +
                        har bitta
                        C1 natija uchun- 35 000
                        B2 natija uchun - 25 000
                        B1 natija uchun - 15 000

                        va 8 ta va undan ortiq guruhlarda 100% dan 100% o’quvchilari sertifikat olsa yana + 100 000 uzs bonus.</p>
                </div>
            </Newest>
        </Wrapper>
    )
}

export default Header