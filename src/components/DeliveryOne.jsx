import { useState } from 'react'
import '../styles/delivery.scss'
import Pedidos from '../data/Pedidos.json'

const DeliveryOne = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const date = Pedidos.fulfillments.F1.freightCosts.deliveryEstimatedDate

    const dateAdjusted = new Date(date)

    const dateFormatted = dateAdjusted.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
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
                        <span>{Pedidos.id}-{Pedidos.fulfillments.F1.id}</span>
                    </div>

                    <div>
                        <p>Status da Entrega</p>
                        <div className='status'>
                            <span className='status-circle-delivery'></span>
                            <span>{Pedidos.fulfillments.F1.status}</span>
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
                                    <span>{Pedidos.fulfillments.F1.shipment.name}</span>
                                    <span>845.983.233-90</span>
                                </div>
                            </div>

                            <div>
                                <p>Modalidade</p>
                                <div>
                                    <p>{Pedidos.fulfillments.F1.locationType}</p>
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
                                    <p>{Pedidos.fulfillments.F1.shipment.address1}, {Pedidos.fulfillments.F1.shipment.number} {Pedidos.fulfillments.F1.shipment.city} - {Pedidos.fulfillments.F1.shipment.state}
                                        {Pedidos.fulfillments.F1.shipment.zip}
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
                                    <p>{Pedidos.fulfillments.F1.type}</p>
                                </div>
                            </div>

                            <div>
                                <p>Preço do Frete</p>
                                <div>
                                    <p>R$ {Pedidos.fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</p>
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
                                                <img src="" alt={Pedidos.fulfillments.F1.items.AR384675.name} />
                                                <div>
                                                    <p>{Pedidos.fulfillments.F1.items.AR384675.name}</p>
                                                    <p>{Pedidos.fulfillments.F1.items.AR384675.color}, {Pedidos.fulfillments.F1.items.AR384675.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{Pedidos.fulfillments.F1.items.AR384675.sku}</p>
                                        </td>
                                        <td>
                                            <p>{Pedidos.fulfillments.F1.items.AR384675.quantity}</p>
                                        </td>
                                        <td>
                                            <p>Subtotal {Pedidos.fulfillments.F1.items.AR384675.price.toFixed(2)}</p>
                                            <p>Frete {Pedidos.fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</p>
                                            <p>Valor total {Pedidos.fulfillments.F1.items.AR384675.price.toFixed(2)}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='product-details'>
                                                <img src='' alt={Pedidos.fulfillments.F1.items.AR384677.name} />
                                                <div>
                                                    <p>{Pedidos.fulfillments.F1.items.AR384677.name}</p>
                                                    <p>{Pedidos.fulfillments.F1.items.AR384677.color}, {Pedidos.fulfillments.F1.items.AR384677.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{Pedidos.fulfillments.F1.items.AR384677.sku}</td>
                                        <td>{Pedidos.fulfillments.F1.items.AR384677.quantity}</td>
                                        <td>
                                            <p>Subtotal {Pedidos.fulfillments.F1.items.AR384677.price.toFixed(2)}</p>
                                            <p>Frete {Pedidos.fulfillments.F1.freightCosts.totalPrice.toFixed(2)}</p>
                                            <p>Valor total {Pedidos.fulfillments.F1.items.AR384677.price.toFixed(2)}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan='4'>
                                            <p>03 unidades de 02 itens</p> 
                                            <p>Subtotal R$300,00</p>
                                            <p>Frete Total R$10,00</p>
                                            <p>Valor total R$310,00</p>
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