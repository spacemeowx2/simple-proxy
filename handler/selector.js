const WSHandler = require('./base').WSHandler
const axiosRun = require('./axios').axiosRun
exports.SelectorHandler = class SelectorHandler extends WSHandler {
  async run () {
    let go = true
    while (go) {
      let method = await this.recv()
      console.log('selector', 'choose', method)
      try {
        switch (method) {
          case 'exit':
            go = false
            break
          case 'axios':
            await axiosRun(this)
            break
        }
        console.log('selector', method, 'done')
      } catch (e) {
        console.error('selector error', e.message)
        go = false
      }
    }
    console.log('selector exit')
  }
}
