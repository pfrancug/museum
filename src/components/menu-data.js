import { faCalendarAlt, faIcons, faCube, faTicketAlt, faIdCard, faGift } from '@fortawesome/pro-light-svg-icons'

const menuData = [
    {
        label: 'Exhibitions & Events',
        url: '/home',
        icon: faCalendarAlt
    },
    {
        label: 'Artists & Artworks',
        url: '/database',
        icon: faIcons
    }, {
        label: 'Collections',
        url: '/collections',
        icon: faCube
    },
    {
        label: 'Plan Your Visit',
        url: '/visitplanner',
        icon: faTicketAlt
    },
    {
        label: 'Become a Member',
        url: '/membership',
        icon: faIdCard
    },
    {
        label: 'Shop',
        url: '/shop',
        icon: faGift
    }
]

export default menuData