import UserCard from './components/UserCard';
import UserList from './components/UserList';
import Button from './components/Button';
import FavoriteColor from './components/FavoriteColor';

const btnProps = { label: 'Submit', variant: 'primary' };

function App() {
  const handleSubmit = () => {
    alert('Submit button clicked');
  };

  return (
    <>
    <UserCard
      name="Fatima"
      role="Developer"
      isOnline={true}
    />
    <UserList/>
    <Button {...btnProps} onClick={handleSubmit} />
    
    <FavoriteColor />
    </>
  );
}

export default App;
