import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div>
        <p className="title">First Innings</p>
        <p className="title-ans">{firstInnings}</p>
        <p className="title">Second Innings</p>
        <p className="title-ans">{secondInnings}</p>
        <p className="title">Man Of The Match</p>
        <p className="title-ans">{manOfTheMatch}</p>
        <p className="title">Umpires</p>
        <p className="title-ans">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
