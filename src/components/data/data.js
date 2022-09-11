import {Edit, Home, LogIn, ShoppingBag, Star, Target} from 'react-feather';
import KnivesRendered from "../renderedSprites/KnivesRendered/KnivesRendered";
import CardsRendered from "../renderedSprites/CardsRendered/CardsRendered";
import StarsRendered from "../renderedSprites/StarsRendered/StarsRendered";

export const NavbarLinks = [
    {
        icon: <Home />,
        title: 'Our Shops',
        link: '/store'
    },
    {
        icon: <Target />,
        title: 'Come in',
        link: '/comein'
    },
    {
        icon: <LogIn />,
        title: 'Log in/Subscribe ',
        link: '/authentication'
    },
    {
        icon: <ShoppingBag />,
        title: 'Basket',
        link: '/basket'
    },
];

export const ReinsuranceItems = [
    {
        icon: <KnivesRendered />,
        descr: 'Guaranteed freshness',
        extra: ''
    },
    {
        icon:
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
            }}
            >
                <Edit style={{width: '30px', height: '30px', stroke: '#ffda45', strokeWidth: '1'}} />
            </div>,
        descr: 'Loyalty Program',
        extra: ''
    },
    {
        icon: <CardsRendered />,
        descr: '100% secure online payment available',
        extra: ''
    },
    {
        icon: <StarsRendered />,
        descr: 'You trust us',
        extra: <Star style={{strokeWidth: '1', width: '18px', height: '18px'}}/>
    },
];

export const nextSunday = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();

    const nextWeekend = () => {
        const today = new Date();
        const first = today.getDate() - today.getDay() + 1;
        const last = first + 6;

        return new Date(today.setDate(last)).getDate();
    }

    return `to take away and delivery until ${nextWeekend()}/${month + 1}/${year}`;
}