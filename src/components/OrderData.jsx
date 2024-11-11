import '../styles/clientData.scss'
import '../styles/ordersData.scss'
import { useSelector } from 'react-redux'

const OrderData = () => {
    const {placedAt, pointOfSale, loaded} = useSelector(rootReducer => rootReducer.dataReducer)

    const ajustedData = placedAt

    const data = new Date(ajustedData)

    const dataFormatada = data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    if(!loaded){
        return <p>Carregando...</p>
    }

    return(
        <>
            <section className="container-card">
                <h2>Dados do Pedido</h2>

                <section className='container-orders'>
                    <article className='orders-data'>
                        <p className='title-orders'>Comprado em</p>
                        <span>{dataFormatada}</span>
                    </article>

                    <article className='orders-data'>
                        <p className='title-orders'>Ponto de Venda</p>
                        <span>{pointOfSale}</span>
                    </article>

                    <article className='orders-data'>
                        <p className='title-orders'>Modalidade de Entrega</p>
                        <span>F1 Envio pela loja, F2 Retira em Loja</span>
                    </article>
                </section>
            </section>
        </>
    )
}

export default OrderData;