/**
 *Page only for checking if data is mocked or not
 */
import Header from '../../components/Header'
import LayoutVertical from '../../components/LayoutVertical'
import './index.css'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Profil page
 * @param {Boolean} dataMocked - if fetch on mock or api
 * @returns  {JsxElement}
 */
function Profil({ dataMocked }) {
    const { userId } = useParams()
    return (
        <div className="profil-Wrapper">
            <Header />
            {dataMocked ? (
                <div className="profil-container">
                    <LayoutVertical />
                    <div className="profil-info">
                        <h2>les datas proviennent du mock </h2>
                        <Link to={`/dashboard/${userId}`}>
                            Retour au dashboard
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="profil-container">
                    <LayoutVertical />
                    <div className="profil-info">
                        <h2>les datas proviennent de la micro Api </h2>
                        <Link to={`/dashboard/${userId}`}>
                            Retour au dashboard
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

Profil.propTypes = {
    dataMocked: PropTypes.bool,
}
export default Profil
