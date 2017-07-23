const isOnline = require('is-online')
const alfy = require('alfy')

isOnline().then(online => {
  if (online) {
    alfy.output([{
      title: 'You\'re online!',
      icon: {
        path: './images/online.png'
      }
    }])
  } else {
    alfy.output([{
      title: 'You\'re not online.',
      icon: {
        path: './images/offline.png'
      }
    }])
  }
})
