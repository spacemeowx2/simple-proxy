/**
 * @typedef {Object} AsyncIO
 * @property {() => Promise<void>} send
 * @property {() => Promise<any>} recv
 */

exports.WSHandler = class WSHandler {
  /**
   * WSHandler
   * @param {WebSocket} ws - incoming WebSocket
   */
  constructor (ws) {
    this.ws = ws
    this.res = () => null
    this.rej = () => null
    ws.onopen = () => {
      console.log('onopen!')
    }
    ws.onmessage = (data) => {
      this.res(data.data)
    }
    ws.onclose = (e) => {
      this.rej(new Error(`Closed code: ${e.code} reason: ${e.reason}`))
    }
  }
  async run () {
    throw new Error('nyi')
  }
  /**
   * send a message
   * @param {string} data 
   */
  async send (data) {
    await this.ws.send(data)
  }
  recv () {
    return new Promise((res, rej) => {
      this.res = res
      this.rej = rej
    })
  }
}
