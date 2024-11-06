import '../styles/header.scss'
import { useSelector } from 'react-redux'
import Pedidos from '../data/Pedidos.json'

const Header = () => {
    const orders = useSelector((state) => state.orders.orders)

    console.log(orders)

    return(
        <>
            <header className="container">
                <div className='container-title'>
                    <h3>Tratamento de entregas</h3>
                </div>

                <div className='container-info'>
                    <div className='info-block'>
                        <p className='info-title'>Pedido</p>
                        <p className='info-data'>{Pedidos.id}</p> {/*usar o redux aqui */}
                    </div>

                    <div className='info-block'>
                        <p className='info-title'>Status do pedido</p>
                        <div className='info-data status'>
                            <span className='status-circle'></span>
                            <span>{Pedidos.status}</span> {/*usar o redux aqui */}
                        </div>
                    </div>

                    <div className='info-block'>
                        <p className='info-title'>Entregas relacionadas</p>
                        <div className='info-data'>
                            <p className='square'>F1</p>
                            <p className='square'>F2</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header