import '../styles/header.scss'
import { useSelector } from 'react-redux'

const Header = () => {
    const {id, status} = useSelector(rootReducer => rootReducer.dataReducer)

    console.log(id)

    return(
        <>
            <header className="container">
                <div className='container-title'>
                    <h3>Tratamento de entregas</h3>
                </div>

                <div className='container-info'>
                    <div className='info-block'>
                        <p className='info-title'>Pedido</p>
                        <p className='info-data'>{id}</p> {/*usar o redux aqui */}
                    </div>

                    <div className='info-block'>
                        <p className='info-title'>Status do pedido</p>
                        <div className='info-data-circle status'>
                            <span className='status-circle pending'></span>
                            <span>{status}</span> {/*usar o redux aqui */}
                        </div>
                    </div>

                    <div className='info-block'>
                        <p className='info-title'>Entregas relacionadas</p>
                        <div className='info-data-square'>
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