const axios = require('axios')

/**
 * @typedef {Object} AsyncIO
 * @property {() => Promise<void>} send
 * @property {() => Promise<any>} recv
 */

/**
 * @param {AsyncIO} io 
 */
exports.axiosRun = async function axiosRun (io) {
    let config = await io.recv()
    console.log('axios:', config)
    config = JSON.parse(config)
    let res = await axios(config)
    let sendRes = {
        status: res.status,
        headers: res.headers,
        data: res.data
    }
    await io.send(JSON.stringify(sendRes))
}
