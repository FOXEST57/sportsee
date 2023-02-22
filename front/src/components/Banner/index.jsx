// @ts-check
import PropTypes from 'prop-types'
import React from 'react'
import { random } from '../../Utils'
import './index.css'
/**
 * Banner for the dashboard
 * @component
 * @prop {String} name   - fisrtName for the user
 * @returns  {React.ReactElement}
 */
export function Banner({ name, dataMocked }) {
    const message = [
        'Félicitation ! Vous avez explosé vos objectifs hier 👏',
        'Super ! Vous êtes en excellente forme  🔥',
    ]
    return (
        <section className="banner-wrapper">
            <h1 className="banner-title">
                Bonjour{' '}
                <span>
                    {name} {dataMocked ? 'Mock' : ''}
                </span>
            </h1>
            <p className="banner-text">{message[random(0, 1)]}</p>
        </section>
    )
}
Banner.propTypes = {
    name: PropTypes.string,
    dataMocked: PropTypes.bool,
}
