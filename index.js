const request = require('request')

class RF {

  constructor (key) {

    const rootUri = 'http://apiclient.resultados-futbol.com/scripts/api/api.php'

    this.reqUri = `${rootUri}?key=${key}&format=json`

  }

  /**
   * @return {Promise}
   */
  getLeages () {
    return new Promise((resolve, reject) => {
      request({
        uri: this.reqUri + '&req=leagues',
        method: "GET"
      }, (err, res, body) => {
        if (err) return reject(err)

        if (res && res.statusCode !== 200) {
          return reject(new Error(body))
        }

        resolve(typeof body === 'string' ? JSON.parse(body) : body)
      })
    })
  }

}

module.exports = RF
