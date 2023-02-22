import { pathApi } from './settings'

/**
 * Call Api  for endpoint check if server is enabled
 * @param {function} setError  - state which handles errors on the call Api
 * @param {function} setLoading - state which manages call loads Api
 * @param {function} setDataMocked  - state which manages the dataMocked
 * @returns {Promise.<void>} void
 */

export async function getServer(setError, setLoading, setDataMocked) {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
    }
    setLoading(true)
    try {
        const response = await fetch(pathApi, fetchOptions)
        console.log(response.ok)
        if (response.ok) {
            setDataMocked(false)
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }
}
