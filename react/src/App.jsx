import UserCard from './components/UserCard';
import UserList from './components/UserList';
import Button from './components/Button';
import FavoriteColor from './components/FavoriteColor';
import Counter from './components/Counter';
import Controls from './components/Controls';
import { useState } from 'react';
  
const btnProps = { label: 'Submit', variant: 'primary' };

function App() {
  const [count, setCount] = useState(0);
  
  const handleSubmit = () => {
    alert('Submit button clicked');
  };

  return (
    /*
    <div>
      <UserCard
        name="Fatima"
        role="Developer"
        isOnline={true}
      />
      <UserList/>
      <Button {...btnProps} onClick={handleSubmit} />
      <FavoriteColor />
    </div>
    */

    <div style={{ textAlign: "center" }}>
      <h1>Counter App</h1>

      <Counter count={count} />
      <Controls setCount={setCount} count={count} />

    </div>
  );
}

export default App;
