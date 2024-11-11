import Header from '../components/Header'
import '../styles/main.scss'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DataActionTypes from '../redux/actions/actionTypes'


import Pedidos from '../data/Pedidos.json'

//componentes
import ClientData from '../components/ClientData'
import PaymentData from '../components/PaymentData'
import OrderData from '../components/OrderData'
import DeliveryOne from '../components/DeliveryOne'
import DeliveryTwo from '../components/DeliveryTwo'

const Home = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));

                dispatch({
                    type: DataActionTypes.Delivery,
                    payload: Pedidos,
                })
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch])

    if(loading){
        return <p>Carregando...</p>
    }

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
                    <DeliveryTwo/>
                </section>
            </main>
        </>
    )
}

export default Home;