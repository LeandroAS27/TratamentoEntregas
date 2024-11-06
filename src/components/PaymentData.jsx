import Pedidos from '../data/Pedidos.json'
import '../styles/clientData.scss'

const PaymentData = () => {
    return(
        <>
            <aside className='container-client'>
                <h2>Dados de Pagamento</h2>
                
                <div className='container-payment'>
                    <p>Subtotal</p>
                    <p>R$ {Pedidos.totals.subtotal}</p>
                </div>

                <div className='container-payment'>
                    <p>Frete</p>
                    <p>R$ {Pedidos.totals.freightCosts}</p>
                </div>

                <div className='container-payment'>
                    <p>Disconto</p>
                    <p className='discount'>- R$ {Pedidos.totals.discount}</p>
                </div>

                <div className='container-payment'>
                    <p>Valor Total</p>
                    <p className='total'>R$ {Pedidos.totals.total}</p>
                </div>

                <div>
                    <hr className='separator'></hr>
                </div>

                <span>Método de pagamento</span>
                <div className='billing'>
                    <p>{Pedidos.payments[0].brand} {Pedidos.payments[0].number} Exp. {Pedidos.payments[0].expiresAt} </p>
                    <p>{Pedidos.payments[0].installments}x de R${Pedidos.payments[0].amount}</p>
                </div>
            </aside>
        </>
    )
}

export default PaymentData;