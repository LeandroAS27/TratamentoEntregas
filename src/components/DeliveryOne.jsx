import '../styles/delivery.scss'
import { useState } from 'react'
import  { useSelector } from 'react-redux'

import TenisNB from '../images/tenisNB.jpg'
import TenisC from '../images/tenisC.jpg'

import useOrderSummary from '../hooks/useOrderSummary'

const DeliveryOne = () => {
    const {fulfillments, id, loaded } = useSelector(rootReducer => rootReducer.dataReducer)
    const {totalItems, subTotal, Total, frete} = useOrderSummary('F1', ['AR384675', 'AR384677'])

    const [isExpanded, setIsExpanded] = useState(false)

    // const frete = fulfillments.F1.freightCosts.totalPrice;

    // const itemOne = fulfillments?.F1?.items?.AR384675 || {};
    // const itemTwo = fulfillments?.F1?.items?.AR384677 || {};

    // console.log(itemOne)
    // console.log(itemTwo)

    const date = fulfillments.F1.freightCosts.deliveryEstimatedDate

    const dateAdjusted = new Date(date)

    const dateFormatted = dateAdjusted.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }

    if(!loaded){
        return <p>Carregando...</p>
    }
    return(
        <>
            <section className='container-client'>
                <header className='card-header'>
                    <div className='teste'>
                        <div className='toggle-icon' onClick={handleToggle}>
                            <span className={isExpanded ? 'arrow-up' : 'arrow-down'}></span>
                        </div>
                    </div>

                    <div className='info'>
                        <p>Entrega F1</p>
                        <span>{id}-{fulfillments.F1.id}</span>
                    </div>

                    <div>
                        <p>Status da Entrega</p>
                        <div className='status'>
                            <span className='status-circle delivered'></span>
                            <span>{fulfillments.F1.status}</span>
                        </div>
                    </div>
                </header>

                {isExpanded && (
                    <section className='card-body'>
                        <h2>Dados da entrega</h2>

                        <div className='container-delivery'>
                            <div>
                                <p>Retirado por</p>
                                <div className='delivery-description'>
                                    <span>{fulfillments.F1.shipment.name}</span>
                                    <span>845.983.233-90</span>
                                </div>
                            </div>

                            <div>
                                <p>Modalidade</p>
                                <div>
                                    <p>{fulfillments.F1.locationType}</p>
                                </div>
                            </div>

                            <div>
                                <p>Data de previsão Cliente</p>
                                <div>
                                    <p>{dateFormatted}</p>
                                </div>
                            </div>

                            <div>
                                <p>Endereço de Entrega</p>
                                <div>
                                    <p>{fulfillments.F1.shipment.address1}, {fulfillments.F1.shipment.number} {fulfillments.F1.shipment.city} - {fulfillments.F1.shipment.state}
                                        {fulfillments.F1.shipment.zip}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p>Transportadora</p>
                                <div>
                                    <p>Sistemas S.A</p>
                                </div>
                            </div>

                            <div>
                                <p>Tipo</p>
                                <div>
                                    <p>{fulfillments.F1.type}</p>
                                </div>
                            </div>

                            <div>
                                <p>Preço do Frete</p>
                                <div>
                                    <p>R$ {fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>

                            <div>
                                <p>Data Previsão Transportadora</p>
                                <div>
                                    <p>{dateFormatted}</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <hr className='separator'></hr>
                        </div>

                        <section className='table-section'>
                            <h2>Detalhes da Entrega</h2>
                            <table className='checkout-table'>
                                <thead>
                                    <tr>
                                        <th>PRODUTO</th>
                                        <th>SKU</th>
                                        <th>QTD.</th>
                                        <th>PREÇO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className='product-details'>
                                                <img src={TenisNB} alt={fulfillments.F1.items.AR384675.name} className='images-icon' />
                                                <div>
                                                    <p>{fulfillments.F1.items.AR384675.name}</p>
                                                    <p>{fulfillments.F1.items.AR384675.color}, {fulfillments.F1.items.AR384675.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{fulfillments.F1.items.AR384675.sku}</p>
                                        </td>
                                        <td>
                                            <p>{fulfillments.F1.items.AR384675.quantity}</p>
                                        </td>
                                        <td>
                                            <div className='prices'>
                                                <p>Subtotal</p>
                                                <p>R$ {fulfillments.F1.items.AR384675.price.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Frete </p>
                                                <p>R$ {fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Valor total</p>
                                                <p>R$ {fulfillments.F1.items.AR384675.price.toFixed(2)}</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='product-details'>
                                                <img src={TenisC} alt={fulfillments.F1.items.AR384677.name} className='images-icon' />
                                                <div>
                                                    <p>{fulfillments.F1.items.AR384677.name}</p>
                                                    <p>{fulfillments.F1.items.AR384677.color}, {fulfillments.F1.items.AR384677.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{fulfillments.F1.items.AR384677.sku}</td>
                                        <td>{fulfillments.F1.items.AR384677.quantity}</td>
                                        <td>
                                            <div className='prices'>
                                                <p>Subtotal</p>
                                                <p>R$ {fulfillments.F1.items.AR384677.price.toFixed(2)}</p>
                                            </div>
                                            
                                            <div className='prices'>
                                                <p>Frete</p>
                                                <p>R$ {fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Valor total</p>
                                                <p>R$ {fulfillments.F1.items.AR384677.price.toFixed(2)}</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Items ({totalItems}) de 02 itens</p> 
                                            <div className='prices'>
                                                <p>Subtotal</p>
                                                <p>R${subTotal.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Frete Total</p>
                                                <p>R${frete.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Valor total</p>
                                                <p>R${Total.toFixed(2)}</p>
                                            </div>
                                            {/* vou ter que somar extraindo os valores do json */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>
                )}
            </section>
        </>
    )
}

export default DeliveryOne;