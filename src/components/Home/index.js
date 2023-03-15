import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const camelCaseList = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(camelCaseList)
    this.setState({isLoading: false, teamsList: camelCaseList})
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="home-container">
        <div className="main-heading-container">
          <img
            alt="ipl logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL DashBoard</h1>
        </div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <ul className="team-list-container">
            {teamsList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
