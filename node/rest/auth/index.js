const crypto = require('crypto');

const getAuthHeaders = (apiKey, secret, path, body) => {
  const nonce = new Date().getTime();
  const messageToSign = getMessageToSign(nonce, path, body);
  const signature = getMessageSignature(messageToSign, secret);

  return {
    'x-api-key': apiKey,
    'api-signature': signature,
    'x-nonce': nonce
  };
};

const getMessageToSign = (nonce, url, body) => {
  const hasBody = !!body && Object.keys(body).length > 0;
  return hasBody ? `${nonce}:${url}:${JSON.stringify(body)}` : `${nonce}:${url}`;
};

const getMessageSignature = (message, secret) => {
  const hash = new crypto.createHash('sha256');
  const hmac = new crypto.createHmac('sha512', secret);
  const hashDigest = hash.update(message).digest('binary');
  const hmacDigest = hmac.update(hashDigest, 'binary').digest('base64');

  return hmacDigest;
};

module.exports = {
  getAuthHeaders
};
