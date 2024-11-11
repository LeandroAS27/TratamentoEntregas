import '../styles/deliveryTwo.scss'
import { useState } from 'react'
import  { useSelector } from 'react-redux'

import TenisNK from '../images/TenisNK.jpg'
import TenisNK2 from '../images/TenisNK2.webp'

import useOrderSummary from '../hooks/useOrderSummary'

const DeliveryTwo = () => {
    const {fulfillments, id, loaded } = useSelector(rootReducer => rootReducer.dataReducer)
    const {totalItems, subTotal, Total, frete} = useOrderSummary('F2', ['TN35568798', 'TC587879785'])

    const [isExpanded, setIsExpanded] = useState(false)

    const date = fulfillments.F2.freightCosts.deliveryEstimatedDate

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
                        <p>Entrega F2</p>
                        <span>{id}-{fulfillments.F2.id}</span>
                    </div>

                    <div>
                        <p>Status da Entrega</p>
                        <div className='statusA'>
                            <span className='status-circle shipment'></span>
                            <span>{fulfillments.F2.status}</span>
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
                                    <span>{fulfillments.F2.shipment.name}</span>
                                    <span>845.983.233-90</span>
                                </div>
                            </div>

                            <div>
                                <p>Modalidade</p>
                                <div>
                                    <p>{fulfillments.F2.locationType}</p>
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
                                    <p>{fulfillments.F2.shipment.address1}, {fulfillments.F1.shipment.number} {fulfillments.F1.shipment.city} - {fulfillments.F1.shipment.state}
                                        {fulfillments.F2.shipment.zip}
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
                                    <p>{fulfillments.F2.type}</p>
                                </div>
                            </div>

                            <div>
                                <p>Preço do Frete</p>
                                <div>
                                    <p>R$ {fulfillments.F2.freightCosts.totalPrice.toFixed(2)}</p>
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
                                                <img src={TenisNK} alt={fulfillments.F2.items.TN35568798.name} className='images-icon' />
                                                <div>
                                                    <p>{fulfillments.F2.items.TN35568798.name}</p>
                                                    <p>{fulfillments.F2.items.TN35568798.color}, {fulfillments.F2.items.TN35568798.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{fulfillments.F2.items.TN35568798.sku}</p>
                                        </td>
                                        <td>
                                            <p>{fulfillments.F2.items.TN35568798.quantity}</p>
                                        </td>
                                        <td>
                                            <div className='prices'>
                                                <p>Subtotal</p>
                                                <p>R$ {fulfillments.F2.items.TN35568798.price.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Frete </p>
                                                <p>R$ {fulfillments.F2.freightCosts.totalPrice.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Valor total</p>
                                                <p>R$ {fulfillments.F2.items.TN35568798.price.toFixed(2)}</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='product-details'>
                                                <img src={TenisNK2} alt={fulfillments.F2.items.TC587879785.name} className='images-icon' />
                                                <div>
                                                    <p>{fulfillments.F2.items.TC587879785.name}</p>
                                                    <p>{fulfillments.F2.items.TC587879785.color}, {fulfillments.F1.items.AR384677.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{fulfillments.F2.items.TC587879785.sku}</td>
                                        <td>{fulfillments.F2.items.TC587879785.quantity}</td>
                                        <td>
                                            <div className='prices'>
                                                <p>Subtotal</p>
                                                <p>R$ {fulfillments.F2.items.TC587879785.price.toFixed(2)}</p>
                                            </div>
                                            
                                            <div className='prices'>
                                                <p>Frete</p>
                                                <p>R$ {fulfillments.F2.freightCosts.totalPrice.toFixed(2)}</p>
                                            </div>

                                            <div className='prices'>
                                                <p>Valor total</p>
                                                <p>R$ {fulfillments.F2.items.TC587879785.price.toFixed(2)}</p>
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

export default DeliveryTwo;