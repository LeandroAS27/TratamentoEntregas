import Header from '../components/Header'
import '../styles/main.scss'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadOrders } from '../redux/actions/orderActions'

import Pedidos from '../data/Pedidos.json'
import ClientData from '../components/ClientData'
import PaymentData from '../components/PaymentData'
import OrderData from '../components/OrderData'

const Home = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadOrders(ordersData))
    // }, [dispatch])

    return(
        <>
            <header className=''>
                <Header/>
            </header>

            <main>
                <section className='container-data-client'>
                    <ClientData/>
                    <PaymentData/>
                </section>

                <section>
                    <OrderData/>
                </section>
            </main>
        </>
    )
}

export default Home;