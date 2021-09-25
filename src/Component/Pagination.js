import './Pagination.css'

const Pagination = ({slide, index, setSlide}) => {
    return(
        <>
    <div 
        className={slide === index + 1 ? 'pagination activeBullets' : 'pagination'}
        onClick={() => setSlide(index + 1)}
         >
    </div>

        </>
    )
}

export default Pagination;