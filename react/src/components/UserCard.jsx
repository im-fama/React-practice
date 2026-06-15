import '../css/UserCard.css';

function UserCard({ name, role, isOnline }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{role}</p>
      {isOnline && <span className="badge">Online</span>}
    </div>
  );
}
export default UserCard;