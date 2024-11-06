import Pedidos from '../data/Pedidos.json'
import '../styles/clientData.scss'

const ClientData = () => {
    return(
        <>
            <section className="container-client">
                <h2>Dados do cliente</h2>

                <article className='container-data'>
                    <p className='title-customer'>{Pedidos.customer.name}</p>
                    <span className='info-customer'>434.654.123-90</span>
                </article>

                <article className='container-data'>
                    <p className='title-customer'>{Pedidos.customer.email}</p>
                    <span className='info-customer'>{Pedidos.customer.telephone.number}</span>
                </article>

                <article className='container-data'>
                    <p className='title-customer'>Endereço de cobrança</p>
                    <address className='info-customer'>{Pedidos.billingAddress.address1}, {Pedidos.billingAddress.number} 
                        {Pedidos.billingAddress.city} - {Pedidos.billingAddress.state} - {Pedidos.billingAddress.zip}
                    </address>
                </article>

                <article className='container-data'>
                    <p className='title-customer'>Endereço de Entrega</p>
                    <address className='info-customer'>{Pedidos.billingAddress.address1}, {Pedidos.billingAddress.number} 
                        {Pedidos.billingAddress.city} - {Pedidos.billingAddress.state} - {Pedidos.billingAddress.zip}
                    </address>
                </article>
            </section>
        </>
    )
}

export default ClientData;