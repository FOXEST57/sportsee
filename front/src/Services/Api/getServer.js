import { pathApi } from './settings'

/**
 * Call Api  for endpoint check if server is enabled
 * @param {function} setDataMocked  - state which manages the dataMocked
 * @returns {Promise.<void>} void
 */

export async function getServer(setDataMocked) {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
    }
    try {
        const response = await fetch(pathApi, fetchOptions)
        if (response.ok) {
            setDataMocked(false)
        }
    } catch (err) {
        console.log(err)
    }
}
