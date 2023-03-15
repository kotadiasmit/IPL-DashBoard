import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = eachMatchDetails

  const isWin = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card-container">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-result ${isWin}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
