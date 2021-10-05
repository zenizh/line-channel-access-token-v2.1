const jose = require('node-jose')

const privateKey = `(private key)`

const header = {
  alg: 'RS256',
  typ: 'JWT',
  kid: '(kid)'
}

const payload = {
  iss: '(channel id)',
  sub: '(channel id)',
  aud: 'https://api.line.me/',
  exp: Math.floor(new Date().getTime() / 1000) + 60 * 30,
  token_exp: 60 * 60 * 24 * 30
}

jose.JWS.createSign({ format: 'compact', fields: header }, JSON.parse(privateKey))
  .update(JSON.stringify(payload))
  .final()
  .then(result => {
    console.log(result)
  })
