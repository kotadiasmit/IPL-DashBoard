import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="detail-container">
        <img src={teamImageUrl} alt={name} className="card-team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
