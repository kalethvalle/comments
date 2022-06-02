import './App.css'
import { Header } from './components/header/header';
import { Comment } from './views/comments/comments';

const App = () => {
  return (
    <div>
      <Header title={'Listado de comentarios'} />
      <Comment />
      {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
    </div>
    
  );
}

export default App;
