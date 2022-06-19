import {useState} from 'react'
import Login from './components/Login';
function App() {
  const [user , setUser] = useState(null);
  return (
    <div className="App">
   <Login user={user}/>
   {/* <Header user={user}/>
   <Feed user={user}/> */}

    </div>
  );
}

export default App;
