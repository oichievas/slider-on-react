import { useEffect, useState } from 'react';
import { Images } from './../Utils/images';
import BtnnSlider from './BtnSlider';
import Pagination from './Pagination';
import './Slider.css';


const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(2);

    const nextSlide = () => {
        if(sliderIndex !== Images.length) {
            setSliderIndex(sliderIndex + 1)
        } else if (sliderIndex === Images.length) {
            setSliderIndex(1)
        }
    }

    const prevSlide = () => {
        if(sliderIndex !== 1 ) {
            setSliderIndex(sliderIndex - 1)
        } else if (sliderIndex === 1){
            setSliderIndex(Images.length)
        }
    }

    // useEffect(() => {
    //     setInterval(() => {
    //         if(sliderIndex !== Images.length) {
    //             setSliderIndex(sliderIndex + 1)
    //         } else if (sliderIndex === Images.length) {
    //             setSliderIndex(1)
    //         }  
    //     }, 2000);
    // }, [])

    const movePagination = (index) => {
        setSliderIndex(index)
    }

    return(
        <>
            <div className="parent">
                {
                    Images.map((item , index) => (
                        <img
                            key={item.id}
                            src={item.url}
                            alt=""
                            className={sliderIndex === index + 1 ? 'slider_img active' :
                            'slider_img'
                        }
                        />
                    ))
                }
                <BtnnSlider moveSlide={prevSlide} direction='prev' />
                <BtnnSlider moveSlide={nextSlide} direction='next' />

                <div className="bullets">
                    {
                        Array.from({length: Images.length}).map((item, index) => (
                            <Pagination
                            slide={sliderIndex}
                            index={index}
                            setSlide={movePagination}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Slider;