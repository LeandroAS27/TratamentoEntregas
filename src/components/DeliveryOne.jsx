import '../styles/delivery.scss'
import { useState } from 'react'
import  { useSelector } from 'react-redux'

import TenisNB from '../images/tenisNB.jpg'
import TenisC from '../images/tenisC.jpg'

import useOrderSummary from '../hooks/useOrderSummary'

const DeliveryOne = () => {
    const {fulfillments, id, loaded } = useSelector(rootReducer => rootReducer.dataReducer)
    const {totalItems, subTotal, Total, frete} = useOrderSummary('F1', ['AR384675', 'AR384677'])

    const [isExpanded, setIsExpanded] = useState(false);

    const date = fulfillments.F1.freightCosts.deliveryEstimatedDate;

    const dateAdjusted = new Date(date);

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
                    <div className='container-maior'>
                            <div className='toggle-icon' onClick={handleToggle}>
                                <span className={isExpanded ? 'arrow-up' : 'arrow-down'}></span>
                            </div>

                        <div className='info'>
                            <p className='entrega-title'>Entrega F1</p>
                            <span>{id}-{fulfillments.F1.id}</span>
                        </div>

                        <div className='status-container'>
                            <p className='info-title'>Status da Entrega</p>
                            <div className='status'>
                                <span className='status-circle delivered'></span>
                                <span>{fulfillments.F1.status}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {isExpanded && (
                    <section className='card-body'>
                        <h2>Dados da entrega</h2>

                        <dl className='container-delivery'>
                            <div className='spacing'>
                                <dt className='info-title'>Retirado por</dt>
                                <div className='delivery-description'>
                                    <dd>{fulfillments.F1.shipment.name}</dd>
                                    <dd>845.983.233-90</dd>
                                </div>
                            </div>

                            <div className='spacing'>
                                <dt className='info-title'>Modalidade</dt>
                                <div>
                                    <dd>{fulfillments.F1.locationType}</dd>
                                </div>
                            </div>

                            <div className='spacing'>
                                <dt className='info-title'>Data de previsão Cliente</dt>
                                <div>
                                    <dd>{dateFormatted}</dd>
                                </div>
                            </div>

                            <div className='spacing'>
                                <dt className='info-title'>Endereço de Entrega</dt>
                                <div>
                                    <dd>{fulfillments.F1.shipment.address1}, {fulfillments.F1.shipment.number} {fulfillments.F1.shipment.city} - {fulfillments.F1.shipment.state}
                                        {fulfillments.F1.shipment.zip}
                                    </dd>
                                </div>
                            </div>

                            <div className='spacing'>
                                <dt className='info-title'>Transportadora</dt>
                                <div>
                                    <dd>Sistemas S.A</dd>
                                </div>
                            </div>

                            <div className='spacing'> 
                                <dt className='info-title'>Tipo</dt>
                                <div>
                                    <dd>{fulfillments.F1.type}</dd>
                                </div>
                            </div>

                            <div className='spacing'>
                                <dt className='info-title'>Preço do Frete</dt>
                                <div>
                                    <dd>R$ {fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</dd>
                                </div>
                            </div>

                            <div className='spacing'>
                                <dt className='info-title'>Data Previsão Transportadora</dt>
                                <div>
                                    <dd>{dateFormatted}</dd>
                                </div>
                            </div>

                        </dl>
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
                                        <td colSpan='4'>
                                            <p>Items ({totalItems}) de 02 itens</p> 
                                            <div className='table-prices'>
                                                <p>Subtotal</p>
                                                <p>R${subTotal.toFixed(2)}</p>
                                            </div>

                                            <div className='table-prices'>
                                                <p>Frete Total</p>
                                                <p>R${frete.toFixed(2)}</p>
                                            </div>

                                            <div className='table-prices'>
                                                <p>Valor Total</p>
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