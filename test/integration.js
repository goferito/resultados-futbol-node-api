
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

  it('gets the teams', (done) => {
    rf.getTeams('espana').then((teams) => {

      const celta = {
        id: '712',
        nameShow: 'Celta',
        basealias: 'celta',
        competition_name: 'Primera División',
        team_shield: 'http://thumb.resfu.com/img_data/escudos/medium/712.jpg'
                        + '?size=36x&ext=png&lossy=1&1'
      }

      expect(teams).to.be.ok
      expect(teams.teams).to.have.length(20)
      expect(teams.teams.some((team) => {
        try {
          expect(team).to.eql(celta)
          return true
        } catch (e) {
          return false
        }
      })).to.be.true

      done()
    })
    .catch(done)
  })

})

