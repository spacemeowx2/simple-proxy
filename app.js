const WebSocket = require('ws')
const SelectorHandler = require('./handler/selector').SelectorHandler

async function main () {
  const wss = new WebSocket.Server({
    port: 22083
  })
  wss.on('connection', function connection(ws) {
    const handler = new SelectorHandler(ws)
    handler.run()
      .then(() => ws.close())
      .catch(e => console.error('error', e.message))
  })
  console.log('Listening to port 22083')
}
main().catch(e => console.error(e))
