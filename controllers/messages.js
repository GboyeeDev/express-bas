const path = require('path')
// windows: \folder\files.jpg mac or linux: /folder/files.jpg


function getMessages (req, res) {
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Gboyega Ojelabi'
    })

    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'dev.jpg'))
    // res.send('<ul><li>Your messages are private</li></ul>')
}

function postMessage(req, res) {
    console.log('Updating messages...')
}


module.exports = {
    getMessages, postMessage
}
