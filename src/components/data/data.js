import {Home, LogIn, ShoppingBag, Target} from 'react-feather';

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