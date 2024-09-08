import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';
import whiteCar from '../../../assets/car1.png';
import car2 from '../../../assets/car5.png';
import car3 from '../../../assets/car6.png';

export const NavLinks = [
    {
        id: '1',
        name: 'HOME',
        link: '/#'
    },
    {
        id: '2',
        name: 'CARS',
        link: '/#cars'
    },
    {
        id: '3',
        name: 'ABOUT',
        link: '/#about'
    },
    {
        id: '4',
        name: 'BOOKING',
        link: '/#booking'
    }
];

export const skillsData = [
    {
        name: 'Best Price',
        icon: <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300' />,
        link: '#',
        description: 'Offering top deals on rental cars with unmatched affordability.',
        aosDelay: '0'
    },
    {
        name: 'Fast and Safe',
        icon: <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />,
        link: '#',
        description: 'Enjoy a quick and secure rental process, ensuring your safety on every journey.',
        aosDelay: '500'
    },
    {
        name: 'Experience Drivers',
        icon: <SlNote className='text-5xl text-primary group-hover:text-black duration-300' />,
        link: '#',
        description: 'Drive with confidence, supported by our team of skilled and experienced drivers',
        aosDelay: '1000'
    }
];

export const featuredCars = [
    {
        name: 'BMW UX',
        price: 100,
        image: whiteCar,
        aosDelay: '0'
    },
    {
        name: 'KIA UX',
        price: 140,
        image: car2,
        aosDelay: '500'
    },
    {
        name: 'BMW UX',
        price: 100,
        image: car3,
        aosDelay: '1000'
    }
];

export const testimonialData = [
    {
        name: 'Elgun',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        aosDelay: '0'
    },
    {
        name: 'Reshad',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        aosDelay: '300'
    },
    {
        name: 'Sabir',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        aosDelay: '1000'
    }
];

export const FooterLinks = [
    {
        title: 'Home',
        link: '/#'
    },
    {
        title: 'About',
        link: '/#about'
    },
    {
        title: 'Contact',
        link: '/#contact'
    },
    {
        title: 'Blog',
        link: '/#blog'
    }
];
