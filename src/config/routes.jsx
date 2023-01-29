
import AboutUsPage from '../pages/AboutUsPage'
import CarFleetPage from '../pages/CarFleetPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import ReservationPage from '../pages/ReservationPage'

export const routes = [
    {path: '/', exact: true, name: 'Home', component: HomePage},
    {path: '/fleet', exact: true, name: 'Fleet', component: CarFleetPage},
    {path: '/contact', exact: true, name: 'Contact', component: ContactPage},
    {path: '/about', exact: true, name: 'AboutUs', component: AboutUsPage},
    {path: '/reservation', exact: true, name: 'Reservation', component: ReservationPage},
]
