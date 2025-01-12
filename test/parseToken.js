const TOKEN = process.env.TOKEN

function tokenFormat(token) {
  const defToken = {
    token: '',
    name: '',
    tgUid: '',
    qywxUid: ''
  }

  if (typeof token == 'string') {
    token = { token }
  }

  return Object.assign({}, defToken, token)
}

function parseToken(token) {
  const likeArray = /^\[.*\]$/.test(token)
  const likeObject = /^\{.*\}$/.test(token)
  let tokenList = []

  if (!likeArray && !likeObject) {
    return [tokenFormat(token)]
  }

  try {
    tokenList = tokenList.concat(JSON.parse(token))
  } catch (e) {
    throw new Error('JSON 格式有误' + e)
  }

  return tokenList.map(tokenFormat)
}

const tokens = parseToken(TOKEN)

console.log('tokens', tokens)
