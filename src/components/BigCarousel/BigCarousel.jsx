import React, {useState} from "react";
import s from "./BigCarousel.module.css"
import prev from "../../assets/icons/slidershow/prev.svg"
import next from "../../assets/icons/slidershow/next.svg"
import slider_first from "./../../assets/images/slider_first.png"

const BigCarousel = (props) => {

    // const [offset, setOffset, ] = useState([])

    const [offset, setOffset] = useState(0);
    const slideWidth = 1680;
    const totalSlides = 3; // Замените на фактическое количество слайдов

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + slideWidth;
            return newOffset > 0 ? -((totalSlides - 1) * slideWidth) : newOffset;
        });
    };

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - slideWidth;
            return newOffset < -((totalSlides - 1) * slideWidth) ? 0 : newOffset;
        });
    };
    // const handleLeftArrowClick = () => {
    //     setOffset((currentOffset) => {
    //         const newOffset = currentOffset + 1680
    //         return Math.min(newOffset, 0)
    //     })
    // }
    // const handleRightArrowClick = () => {
    //     setOffset((currentOffset) => {
    //         const newOffset = currentOffset - 1680
    //         const maxOffset = -(1680 * 2)
    //         return Math.max(newOffset, maxOffset)
    //     })
    // }
    const SetChooselide = (slide) => {
        setOffset((currentOffset) => {
            switch (slide){
                case 1: return 0
                case 2: return -1680
                case 3: return -3360
                default: return 0
            }
        })
    }

    return (
        <div className={s.mainContainer}>
            <img className={s.arrow} onClick={()=>{handleLeftArrowClick()
                }} src={prev} alt="prev"/>
            <div className={s.window}>
                <div className={s.all_pages_container} style={{transform: `translateX(${offset}px)`}}>

                        <div className={`${s.item} ${s.item1}`}>
                            <img  className={s.itemImg} src={slider_first} alt="slider_img"/>
                            <div className={s.myslides_inner}>
                                <h1 className={s.myslides_title}>Оригинальные подарки с идеальным стилем</h1>
                                <h4 className={s.myslides_subtitle}>Атмосферные подарочные наборы на любой случай </h4>
                                <a href="#" className={s.myslides_button}>Смотреть в каталоге</a>
                            </div>
                        </div>

                        <div className={`${s.item}  ${s.item1}`}>
                            <img className={s.itemImg} src={slider_first} alt="slider_img"/>
                            <div className={s.myslides_inner}>
                                <h1 className={s.myslides_title}>Неоригинальные подарки с идеальным стилем</h1>
                                <h4 className={s.myslides_subtitle}>Атмосферные подарочные наборы на любой случай </h4>
                                <a href="#" className={s.myslides_button}>Смотреть в каталоге</a>
                            </div>
                        </div>

                        <div className={`${s.item}  ${s.item1}`}>
                            <img className={s.itemImg} src={slider_first} alt="slider_img"/>
                            <div className={s.myslides_inner}>
                                <h1 className={s.myslides_title}>Оригинальные подарки с идеальным стилем</h1>
                                <h4 className={s.myslides_subtitle}>Атмосферные подарочные наборы на любой случай </h4>
                                <a href="#" className={s.myslides_button}>Смотреть в каталоге</a>
                            </div>
                        </div>
                </div>
            </div>
            <div className={s.dotInner}>
                <span className={`${s.dot}`} onClick={()=>{
                    SetChooselide(1)
                }}></span>
                <span className={`${s.dot}`} onClick={()=>{
                    SetChooselide(2)
                    }}></span>
                <span className={`${s.dot}`} onClick={()=>{
                    SetChooselide(3)
                }}></span>
            </div>
            <img className={s.arrow} onClick={()=>{handleRightArrowClick()
                }} src={next} alt="next"/>
        </div>
    );
}

export default BigCarousel



