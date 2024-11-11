import '../styles/clientData.scss'
import { useSelector } from 'react-redux'

const ClientData = () => {
    const {customer, billingAddress, loaded} = useSelector(rootReducer => rootReducer.dataReducer)

    if(!loaded){
        return <p>Carregando</p>
    }
    return(
        <>
            <section className="container-client">
                <h2>Dados do cliente</h2>

                <div className='container-data'>
                    <h3 className='title-customer'>{customer.name}</h3>
                    <span className='info-customer'>434.654.123-90</span>
                </div>

                <div className='container-data'>
                    <h3 className='title-customer'>{customer.email}</h3>
                    <span className='info-customer'>{customer.telephone.number}</span>
                </div>

                <div className='container-data'>
                    <h3 className='title-customer'>Endereço de Cobrança</h3>
                    <address className='info-customer'>{billingAddress.address1}, {billingAddress.number} 
                        {billingAddress.city} - {billingAddress.state} - {billingAddress.zip}
                    </address>
                </div>

                <div className='container-data'>
                    <h3 className='title-customer'>Endereço de Entrega</h3>
                    <address className='info-customer'>{billingAddress.address1}, {billingAddress.number} 
                        {billingAddress.city} - {billingAddress.state} - {billingAddress.zip}
                    </address>
                </div>
            </section>
        </>
    )
}

export default ClientData;