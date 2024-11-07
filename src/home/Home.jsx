import Header from '../components/Header'
import '../styles/main.scss'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DataActionTypes from '../redux/actions/actionTypes'


import Pedidos from '../data/Pedidos.json'

//componentes
import ClientData from '../components/ClientData'
import PaymentData from '../components/PaymentData'
import OrderData from '../components/OrderData'
import DeliveryOne from '../components/DeliveryOne'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: DataActionTypes.Delivery,
            payload: Pedidos,
        })
    }, [dispatch])

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

                <section>
                    <DeliveryOne/>
                </section>
            </main>
        </>
    )
}

export default Home;