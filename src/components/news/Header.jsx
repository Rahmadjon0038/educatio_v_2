import React from 'react';
import { Card, Newest, NewsCards, NewsTitle, Wrapper } from './style';
import avatar from '../../assets/avatar.png';

const news = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam repellendus vero dolorem exercitationem!",
        desc: "  O’quv Markazimizda iyun oyidan boshlab oylikdan tashqari aniq belgilangan qo’shimcha BONUSLAR  tashkil qilinadi:",
        img: "https://wallpapers.com/images/hd/hd-john-wick-and-his-dog-x3kdwy4i9sztuvo1.webp",
        author: "admin",
        time: "12 minut oldin"
    },

    {
        id: 2,
        title: "Yana bir yangilik bor...",
        desc: "  Bir sanada 2 va undan ortiq o’quvchilarini sertifikat (B1, B2, C1) natija qildirgan(sertifikatlar ",
        img: "https://wallpapers.com/images/hd/john-wick-an-embodiment-of-raw-action-and-intensity-l5owt9n92nyuazex.webp",
        author: "admin",
        time: "1 soat oldin"
    },
    {
        id: 2,
        title: "Yana bir yangilik bor...",
        desc: "  Bir sanada 2 va undan ortiq o’quvchilarini sertifikat (B1, B2, C1) natija qildirgan(sertifikatlar ",
        img: "https://wallpapers.com/images/high/light-purple-jdm-car-zrbdy9b2tjgf6wqf.webp",
        author: "admin",
        time: "1 soat oldin"
    },
    {
        id: 2,
        title: "Yana bir yangilik bor...",
        desc: "  Bir sanada 2 va undan ortiq o’quvchilarini sertifikat (B1, B2, C1) natija qildirgan(sertifikatlar ",
        img: "https://wallpapers.com/images/hd/cool-cartoon-art-john-wick-hd-7vxt4v5s2mva2w8x.webp",
        author: "admin",
        time: "1 soat oldin"
    },




    {
        id: 2,
        title: "Yana bir yangilik bor...",
        desc: "  Bir sanada 2 va undan ortiq o’quvchilarini sertifikat (B1, B2, C1) natija qildirgan(sertifikatlar ",
        img: "https://wallpapers.com/images/high/men-phone-john-wick-jx681wai8sf1ojqh.webp",
        author: "admin",
        time: "1 soat oldin"
    }, {
        id: 2,
        title: "Yana bir yangilik bor...",
        desc: "  Bir sanada 2 va undan ortiq o’quvchilarini sertifikat (B1, B2, C1) natija qildirgan(sertifikatlar ",
        img: "https://wallpapers.com/images/hd/best-aesthetic-hd-john-wick-still-dgtne5mx4fzois4r.webp",
        author: "admin",
        time: "1 soat oldin"
    },
    
];
function Header() {
    const latestNews = news[0];
    const otherNews = news.slice(1);

    return (
        <Wrapper>
            <NewsTitle>
                <h2>
                    O'quv <span>markazimizda</span> bo'layotgan so'ngi yangiliklar bilan <br /> tanishib boring
                </h2>
            </NewsTitle>

            <Newest>
                <img className='banner' src={latestNews.img} alt="img" />
                <div className='right'>
                    <div className='answers'>
                        <img src={avatar} className='avatar' alt="logo" />
                        <p>{latestNews.author}. {latestNews.time}</p>
                    </div>
                    <h1 className='title'>{latestNews.title}</h1>
                    <p className='desc'>{latestNews.desc}</p>
                </div>
            </Newest>

            <NewsCards>
                {otherNews.map(item => (
                    <Card key={item.id}>
                        <img className='banner' src={item.img} alt="img" />
                        <div className='right'>
                            <div className='answers'>
                                <img src={avatar} className='avatar' alt="logo" />
                                <p>{item.author}. {item.time}</p>
                            </div>
                            <h1 className='title'>{item.title}</h1>
                            <p className='desc'>{item.desc}</p>
                        </div>
                    </Card>
                ))}
            </NewsCards>
        </Wrapper>
    );
}

export default Header;
