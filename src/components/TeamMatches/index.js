import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamId: '',
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const getTeamBannerUrl = data.team_banner_url
    const SnakeCaseLatestMatchDetails = data.latest_match_details
    const getLatestMatchDetails = this.camelCaseLatestMatchDetails(
      SnakeCaseLatestMatchDetails,
    )
    const SnakeCaseRecentMatches = data.recent_matches
    const getRecentMatchesList = this.camelCaseRecentMatchesList(
      SnakeCaseRecentMatches,
    )

    this.setState({
      teamId: id,
      isLoading: false,
      teamBannerUrl: getTeamBannerUrl,
      latestMatchDetails: getLatestMatchDetails,
      recentMatchesList: getRecentMatchesList,
    })

    // console.log(latestMatchDetails)
    console.log(getRecentMatchesList)
  }

  camelCaseLatestMatchDetails = SnakeCaseLatestMatchDetails => {
    const latestMatchDetails = {
      umpires: SnakeCaseLatestMatchDetails.umpires,
      result: SnakeCaseLatestMatchDetails.result,
      manOfTheMatch: SnakeCaseLatestMatchDetails.man_of_the_match,
      id: SnakeCaseLatestMatchDetails.id,
      date: SnakeCaseLatestMatchDetails.date,
      venue: SnakeCaseLatestMatchDetails.venue,
      competingTeam: SnakeCaseLatestMatchDetails.competing_team,
      competingTeamLogo: SnakeCaseLatestMatchDetails.competing_team_logo,
      firstInnings: SnakeCaseLatestMatchDetails.first_innings,
      secondInnings: SnakeCaseLatestMatchDetails.second_innings,
      matchStatus: SnakeCaseLatestMatchDetails.match_status,
    }
    return latestMatchDetails
  }

  camelCaseRecentMatchesList = SnakeCaseRecentMatches => {
    const recentMatchesList = SnakeCaseRecentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    return recentMatchesList
  }

  render() {
    const {
      teamId,
      isLoading,
      recentMatchesList,
      latestMatchDetails,
      teamBannerUrl,
    } = this.state
    return (
      <div className={`team-matches-bg-container ${teamId}`}>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h5 className="heading">Latest Matches</h5>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-list">
              {recentMatchesList.map(eachMatchDetails => (
                <MatchCard
                  eachMatchDetails={eachMatchDetails}
                  key={eachMatchDetails.id}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
