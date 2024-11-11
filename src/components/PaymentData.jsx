import '../styles/clientData.scss'
import { useSelector } from 'react-redux'

const PaymentData = () => {
    const {totals, payments, loaded} = useSelector(rootReducer => rootReducer.dataReducer)

    if(!loaded){
        return <p>Carregando...</p>
    }

    return(
        <>
            <aside className='container-payment-client'>
                <h2>Dados de Pagamento</h2>
                
                <div className='container-payment'>
                    <h3>Subtotal</h3>
                    <p>R$ {totals.subtotal.toFixed(2)}</p>
                </div>

                <div className='container-payment'>
                    <h3>Frete</h3>
                    <p>R$ {totals.freightCosts.toFixed(2)}</p>
                </div>

                <div className='container-payment'>
                    <h3>Desconto</h3>
                    <p className='discount'>- R$ {totals.discount.toFixed(2)}</p>
                </div>

                <div className='container-payment'>
                    <h3>Valor Total</h3>
                    <p className='total'>R$ {totals.total.toFixed(2)}</p>
                </div>

                <div>
                    <hr className='separator'></hr>
                </div>

                <span>Método de pagamento</span>
                <div className='billing'>
                    <p>{payments[0].brand} {payments[0].number} Exp. {payments[0].expiresAt} </p>
                    <p>{payments[0].installments}x de R${payments[0].amount.toFixed(2)}</p>
                </div>
            </aside>
        </>
    )
}

export default PaymentData;