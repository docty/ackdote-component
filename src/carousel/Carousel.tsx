import React, { useEffect, useState } from 'react';
import './carousel.css';



export const Carousel = (props: ICarousel) => {
    const [slide, setSlide] = useState(0);
    const length = props.image.length;
    
    useEffect(() => {
        document.getElementsByClassName('dt-carousel-image')[0].classList.replace('remove', 'show');
    },[]); 
    
    
    useEffect(() => {
        for (let index = 0; index < props.image.length; index++) {
            document.getElementsByClassName('dt-carousel-image')[index].classList.replace('show', 'remove')
            
        }
        document.getElementsByClassName('dt-carousel-image')[slide].classList.add('show');
    }, [slide, props.image])

    

    const slideClick = (item: string) => {
        if (item === 'right') {
            const counter = slide >= length-1 ? 0 :  slide + 1;
            setSlide(counter)
        } else {
            const counter =  slide <= 0 ? length - 1 : slide - 1;
            setSlide(counter)
        }
    }

    return (
        <div className={'dt-carousel'}>
            <CarouselImage image={props.image} />
            <CarouselSlide slideClick={slideClick}/>
            <CarouselDot value={props.image}  slide={slide} dotClick={(value) => setSlide(value)} />
        </div>
  );
};

const CarouselDot = ({value, slide, dotClick}:  {value: Array<string>, slide: number, dotClick: (res:number) => void}) => (
    <div className={'dt-carousel-dot'}>
        {
            value.map((item: string, index: number) => (
                <div key={item.toString()} onClick={() => dotClick(index)} className={slide === index  ? 'dt-carousel-dot-active' : ''}></div>
            ))
        }
    </div>
)    

const CarouselSlide = ({ slideClick}: {slideClick: (res:string) => void}) => (
    <div className={'dt-carousel-sides'}>
        <span onClick={() => slideClick('left')}>&#10094;</span>
        <span onClick={() => slideClick('right')}>&#10095;</span>
    </div>
)

const CarouselImage = (props: ICarousel) => (
    <div  className={'dt-carousel-content'}>
        {
            props.image.map((item: any, index: number) => 
                <img key={index} className={'dt-carousel-image remove'} src={item} alt="unavailabe" />
            )
        }
    </div>
)


export interface ICarousel {
    image: Array<string>;
}
 
