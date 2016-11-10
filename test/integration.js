
const secrets = require('../secrets')
const RF = require('../index')

describe('RF API', () => {

  const rf = new RF(secrets.apiKey)

  it('creates the RF object', () => {
    expect(rf).to.be.ok
    expect(rf.reqUri).to.have.string(secrets.apiKey)
  })

  it('gets the leagues', (done) => {
    rf.getLeagues().then((leagues) => {

      expect(leagues).to.be.ok
      expect(typeof leagues).to.equal('object')
      expect(leagues.league).to.have.length.above(1000)
      done()
      
    })
    .catch(done)
  })

})

