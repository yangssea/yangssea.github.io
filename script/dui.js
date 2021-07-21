// (function () {
  var Dui = {
    env: 'prod',
    connectState: '',
    webSocketUrl: '',
    init: function (options) {
      if (options && options.env) this.env = options.env
      close2()
      connect()
    },
    onConnectStateChanged: function (connectState) {
      console.log(connectState)
    },
    onmessage: function (message) {
      console.log(message)
    },
    send: function (message) {
      send(message)
    },
    close: function () {
      close()
    }
  }

  var ws

  // 发送数据，
  function send (message) {
    console.log(message)
    if (!ws) return
    console.log('send', JSON.stringify(message))
    ws.send(JSON.stringify(message))
  }

  function getQueryStringFromUrl (name) {
    console.log('url is ' + window.location.href)
    var pos = window.location.href.indexOf('?')
    if (pos < 0) {
      return ''
    }
    var query = window.location.href.slice(pos + 1, window.location.href.length)
    pos = query.indexOf(name)
    if (pos < 0) {
      return ''
    }
    var server = query.slice(pos, query.length)
    pos = query.indexOf('&')
    if (pos < 0) {
      server = server.slice(name.length + 1, query.length)
    } else {
      server = server.slice(name.length + 1, pos)
    }
    return unescape(server)
  }

  function connect (options) {
    var server = getQueryStringFromUrl('server')
    console.log('getQueryStringFromUrl server ' + server)
    if (!server || server === 'undefined' || server.length === 0) {
      server = 'ws://dds.dui.ai/dds/v2/test?productId=279596667&apiKey=4d1c25e7579f4c9da6d1a83854e93d27&serviceType=websocket' // 172.16.20.64
      //server = 'ws://127.0.0.1:50002' // 172.16.20.64
    }
    Dui.webSocketUrl = server
    if (Dui.env === 'dev') {
      ws = new WebSocket(Dui.webSocketUrl)
    } else {
      ws = new WebSocket(Dui.webSocketUrl)
    }
    // Dui.connectState = 'connecting'
    // Dui.onConnectStateChanged(Dui.connectState)

    ws.onopen = function (evt) {
      // ws.send('{"event": "helloserver", "data": "nice to meet you"}')
      ws.send(JSON.stringify({'event': 'subscribe', 'data': [{'topic': 'command://DUI.Metro.Go'}, {'topic': 'context.input.text'}, {'topic': 'context.output.text'}, {'topic': 'avatar.silence'}, {'topic': 'avatar.listening'}, {'topic': 'avatar.understanding'}, {'topic': 'avatar.speaking'}, {'topic': 'player.ctrl'}, {'topic': 'dm.output'}, {'topic': 'sys.vad.timeout'}]}))
      Dui.connectState = 'connect'
      if (Dui.onConnectStateChanged) {
        Dui.onConnectStateChanged(Dui.connectState)
      }
      console.log('连接成功！')
    }
    ws.onmessage = function (evt) {
      Dui.onmessage(JSON.parse(evt.data))
    }
    ws.onerror = function (evt) {
      console.log('websocket error')
      Dui.connectState = 'error'
      if (Dui.onConnectStateChanged) {
        Dui.onConnectStateChanged(Dui.connectState)
      }
      console.log('onerror ' + JSON.stringify(evt))
      // setTimeout(() => {
      //   Dui.init(options)
      //   console.log('连接断开，正在尝试重新连接...')
      // }, 3000)
    }
    ws.onclose = function (evt) {
      console.log('websocket closed')
      Dui.connectState = 'closed'
      if (Dui.onConnectStateChanged) {
        Dui.onConnectStateChanged(Dui.connectState)
      }
      // setTimeout(() => {
      //   Dui.init(options)
      //   console.log('连接断开，正在尝试重新连接...')
      // }, 3000)
    }
  }
  function close () {
    if (ws) {
      send({'event': 'publish', 'data': {'topic': 'dialog.ctrl', 'data': 'close'}})
      ws.onopen = undefined
      ws.onmessage = undefined
      ws.onerror = undefined
      ws.onclose = undefined
      ws.close()
      ws = undefined
    }
  }

  function close2 () {
    if (ws) {
      ws.onopen = undefined
      ws.onmessage = undefined
      ws.onerror = undefined
      ws.onclose = undefined
      ws.close()
      ws = undefined
    }
  }

