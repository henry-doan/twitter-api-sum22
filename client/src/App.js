import { Routes, Route } from 'react-router-dom';
import Tweets from './components/tweets/Tweets';
import Nomatch from './components/shared/Nomatch';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Tweets />}/>
      <Route path='/*' element={<Nomatch />}/>
    </Routes>
  </>
)
export default App;
