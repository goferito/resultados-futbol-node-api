const request = require('request')

class RF {

  constructor (key) {

    const rootUri = 'http://apiclient.resultados-futbol.com/scripts/api/api.php'

    this.reqUri = `${rootUri}?key=${key}&format=json`

  }

  requestData (options) {

    // Build the query string from the passed options
    let queryStr = Object.keys(options).reduce((qs, option) => {
      return qs + encodeURI('&' + option + '=' + options[option])
    }, '')

    return new Promise((resolve, reject) => {
      request({
        uri: this.reqUri + queryStr,
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


  /**
   * @return {Promise}
   */
  getLeagues () {
    return this.requestData({req: 'leagues'})
  }


  /**
   * @param {String} filter - Could take 'espana' or 'otros'. Defaults to empty string
   * @param {Number} init   - Number of results to skip. Default 0
   * @param {Number} limit  - Number of results. Default 20
   * @return {Promise}
   */
  getTeams (filter = 'espana', init = 0, limit = 20) {
    //TODO contact the guys and complain that it always returns 20 independently
    //of the provided limit
    return this.requestData({
      req: 'get_teams',
      filter,
      init,
      limit
    })
  }

}

module.exports = RF
