import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../ComponentStyle/SwiperSection.css"
import { Navigation, Pagination } from 'swiper/modules';
import Swiper1 from "../assets/swiper1 1.png"
import Swiper2 from "../assets/swiper2 1.png"
import Swiper3 from "../assets/swiper3 1.png"
import Swiper4 from "../assets/swiper4 1.png"
import Swiper5 from "../assets/swiper5 1.png"
import Swiper6 from "../assets/swiper6 1.png"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

 function SwiperSection() {

    const textRef = useRef(null);
    const swiperRef = useRef(null); 

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(textRef.current, {
                opacity: 0,
                y: 200
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            });
        }
    }, [textRef]);
    useEffect(() => {
        if (swiperRef.current) {
            gsap.fromTo(swiperRef.current, {
                opacity: 0,
                x: 200
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: swiperRef.current,
                    start: "top 60%",
                }
            });
        }
    })

  return (
    <>
      <h1 ref={textRef}>Kenali iPhone lebih dalam.</h1>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev',
        }}
        modules={[Navigation, Pagination]} className="mySwiper" ref={swiperRef}>
        <SwiperSlide>
            <div className="swiper1 swiperCon">
                <div className="swiperPic">
                    <img src={Swiper1} alt="" />
                </div>
                <div className="swiperText">
                    <p className='swiperText1'>Kamera Canggih</p>
                    <p className='swiperText2'>Ambil foto dan video seindah bayangan Anda.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper2 swiperCon">
                <div className="swiperPic">
                    <img src={Swiper2} alt="" />
                </div>
                <div className="swiperText">
                    <p className='swiperText1'>Chip dan Kekuatan Baterai</p>
                    <p className='swiperText2'>Kecepatan<br/>yang bertahan lama.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper3 swiperCon">
                <div className="swiperPic">
                    <img src={Swiper3} alt="" />
                </div>
                <div className="swiperText">
                    <p className='swiperText1'>Inovasi</p>
                    <p className='swiperText2'>Didesain indah dan Tangguh</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper4 swiperCon">
                <div className="swiperPic">
                    <img src={Swiper4} alt="" />
                </div>
                <div className="swiperText">
                    <p className='swiperText1'>Apple Intelligence</p>
                    <p className='swiperText2'>Kemungkinan yang menakjubkan.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper5 swiperCon">
                <div className="swiperPic">
                    <img src={Swiper5} alt="" />
                </div>
                <div className="swiperText">
                    <p className='swiperText1'>Lingkungan</p>
                    <p className='swiperText2'>Daur ulang. Gunakan kembali. Ulangi.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper6 swiperCon">
                <div className="swiperPic">
                    <img src={Swiper6} alt="" />
                </div>
                <div className="swiperText">
                    <p className='swiperText1'>Privasi</p>
                    <p className='swiperText2'>Data Anda.<br/>Di tempat yang<br/>Anda inginkan.</p>
                </div>
            </div>
        </SwiperSlide>
        <div className="buttons">
        <div className="swiperButtonPrev" >Prev</div>
        <div className="swiperButtonNext" >Next</div>
        </div>
      </Swiper>
    </>
  );
}

export default SwiperSection

