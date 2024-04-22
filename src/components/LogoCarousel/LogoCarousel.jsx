import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import airbnb from '../../assets/icons/airbnb.svg';
import hubspot from '../../assets/icons/hubspot.svg';
import google from '../../assets/icons/google.svg';
import microsoft from '../../assets/icons/microsoft.svg';
import walmart from '../../assets/icons/walmart.svg';

function LogoCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            removeArrowOnDeviceType={["desktop"]}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            transitionDuration={500}
        >
            <img src={airbnb} alt='data' />
            <img src={hubspot} alt='data' />
            <img src={google} alt='data' />
            <img src={microsoft} alt='data' />
            <img src={walmart} alt='data' />


        </Carousel>
    );
}

export default LogoCarousel;