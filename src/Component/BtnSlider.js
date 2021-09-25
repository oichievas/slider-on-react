import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import './BtnSlider.css';

const BtnnSlider = ({moveSlide, direction}) => {
    return(
        <>
            <button   onClick={moveSlide}
                className={direction === 'next' ? 'btn next' : 'btn prev'}>
                    {
                        direction === 'next' ? (
                            <AiOutlineArrowRight/>
                        ) : direction === 'prev' ? (
                            <AiOutlineArrowLeft/>
                        ) : console.log('It work!')

                    }
            </button>
        </>
    )
}

export default BtnnSlider;