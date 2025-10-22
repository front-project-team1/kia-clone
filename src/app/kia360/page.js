"use client";
import { useState, useEffect } from "react";
import styles from './kia360.module.css';
import Link from "next/link";


// app/page.tsx
export default function Page() {

    // const [activeIndex, setAxtiveIndex] = useState(1);

    // const handleExpand = (idx) => {
    //     setAxtiveIndex(prev => (prev === idx ? -1 : idx));
    // };

// ✅ 추가: 슬라이드 상태/데이터/핸들러
    const [centerIndex, setCenterIndex] = useState(1); // 처음엔 가운데(1) 강조

    const slides = [
    {
        id: 0,
        title: "EV Life Zone",
        desc: "다가올 EV시대와 커넥티드 모빌리티 라이프, 지속가능한 미래를 상상해 보세요.",
        src: "https://www.kia.com/content/dam/kwp/kr/ko/experience/img_kia-360-EV-Life-Zone_on.png",
        alt: "EV",
    },
    {
        id: 1,
        title: "Kia User Zone",
        desc: "나만의 차를 디자인 해보고 EV 드라이버가 되기 위한 팁들을 경험해 보세요.",
        src: "https://www.kia.com/content/dam/kwp/kr/ko/experience/img_kia-360-kia-user-zone_on.png",
        alt: "User",
    },
    {
        id: 2,
        title: "Brand Design Zone",
        desc: "새로운 생각이 시작되는 공간과 시간을 만드는 기아의 브랜드 & 디자인 철학을 소개합니다.",
        src: "https://www.kia.com/content/dam/kwp/kr/ko/experience/img_kia-360-Brand-Design-Zone_on.png",
        alt: "Brand",
    },
    ];

    const ordered = [
        slides[(centerIndex + 2) % slides.length], // 왼쪽
        slides[centerIndex],                       // 가운데
        slides[(centerIndex + 1) % slides.length], // 오른쪽
    ];

    const handleCardClick = (clickedId) => {
    const pos = ordered.findIndex((s) => s.id === clickedId); // 0=왼, 1=가운데, 2=오
    if (pos === 0) setCenterIndex((prev) => (prev + slides.length - 1) % slides.length);
    else if (pos === 2) setCenterIndex((prev) => (prev + 1) % slides.length);
    else setCenterIndex((prev) => prev); // 이미 가운데면 유지
    };


    return (
        <>
        <div className={styles['body']}>
            <div className={styles["main-img"]}>
                <img
                src="https://www.kia.com/content/dam/kwp/kr/ko/experience/kv_kia-360.jpg"
                alt="kia-360"
                />
            </div>

            <div className={styles["main-text-area"]}>
                <div className={styles["main-text-1"]}>
                <p>
                    모든 상상과 영감의 공간
                    <br />
                    Kia 360
                </p>
                </div>
                <div className={styles["main-text-2"]}>
                <p>Kia360에서 새로운 모빌리티 라이프를 위한 여정을 시작해 보세요.</p>
                </div>
                <div className={styles["main-text-3"]}>
                <Link href="https://kia360.kia.com/" target="_blank" rel="noreferrer">
                    자세히 보기
                </Link>
                </div>
            </div>

            <div className={styles["kia-item-area"]}>
                <h2 className={styles["kia-item-title"]}>Kia 체험거점</h2>
                <div className={styles["kia-item-menu-area"]}>
                <ul>
                    <li className={styles["kia360"]}>
                    <a
                        href="https://www.kia.com/kr/experience/flagship/kia360#localnav"
                        title="Kia 360"
                    >
                        Kia 360
                    </a>
                    </li>
                    <li className={styles["kiastore"]}>
                    <a
                        href="https://www.kia.com/kr/experience/flagship/flagship-store#localnav"
                        title="store"
                        target="_blank"
                        rel="noreferrer"
                    >
                        플래그십 스토어
                    </a>
                    </li>
                    <li className={styles["kiaground"]}>
                    <a
                        href="https://www.kia.com/kr/experience/flagship/unplugged-ground#localnav"
                        title="ground"
                        target="_blank"
                        rel="noreferrer"
                    >
                        언플러그드 그라운드
                    </a>
                    </li>
                    <li className={styles["kiadriving"]}>
                    <a
                        href="https://www.kia.com/kr/experience/flagship/kia-driving-experience#localnav"
                        title="driving"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Driving Experience
                    </a>
                    </li>
                </ul>
                </div>
            </div>

            <div className={styles["kia-story-area"]}>
                <p>Kia360 Story</p>
            </div>

            <div className={styles["kia-story-img-item"]}>
                <div className={styles["kia-story-img-area"]}>
                <div className={styles["story-area-left"]}>
                    <div className={styles["img-left"]}>
                    <img
                        src="https://www.kia.com/content/dam/kwp/kr/ko/experience/Img_360story_01.jpg"
                        alt="kia360 스토리1"
                        className={styles["img1"]}
                    />
                    </div>
                    <div className={styles["text-left"]}>
                        <p className={styles["story-text"]}>새로운 생각이 시작되는 시간으로 초대합니다.</p>
                    </div>
                </div>

                <div className={styles["story-area-right"]}>
                    <div className={styles["img-right"]}>
                    <img
                        src="https://www.kia.com/content/dam/kwp/kr/ko/experience/Img_360story_02.jpg"
                        alt="kia360 스토리2"
                        className={styles["img2"]}
                    />
                    </div>
                    <div className={styles["text-right"]}>
                        <p className={styles["story-text"]}>
                            자연과 조화된 무드톤의 따뜻한 공간에서 편안하고 자유롭게 Kia360을 즐겨보세요.
                        </p>
                    </div>
                </div>
                </div>
            </div>

            <div className={styles["kia-experience-area"]}>
                <p>Kia360 Experience</p>
            </div>

            <div className={styles["ex-total-area"]}>
                <div className={styles["ex-padding-area"]}>
                <div className={styles["ex-margin-area"]}>

                    <div className={styles["ex-img-area"]}>
                    {ordered.map((item, idx) => {
                        const isCenter = idx === 1; // 가운데 슬롯
                        const cardClass = [
                        styles["ex-card"],
                        isCenter ? styles["isCenter"] : styles["isSide"],
                        isCenter ? styles["expanded"] : "", // 가운데는 설명 상시 노출
                        ].join(" ");

                        return (
                        <div
                            key={item.id}
                            className={cardClass}
                            onClick={() => handleCardClick(item.id)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className={styles["ex-img"]}>
                            <img src={item.src} alt={item.alt} />
                            </div>

                            <div className={styles["ex-text"]}>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            </div>
                        </div>
                        );
                    })}
                    </div>

                </div>{/* ex-margin-area */}
                </div>{/* ex-padding-area */}
            </div>{/* ex-total-area */}
        </div>
        </>
    );
}
