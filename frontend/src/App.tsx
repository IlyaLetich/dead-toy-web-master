import './App.css';

import { Route, Routes } from 'react-router';
import { Intro } from './screens/intro/intro';
import { About } from './screens/about';
import { Catalog } from './screens/catalog';
import { GameDescription } from './screens/game-description';
import { Error } from './screens/error';
import { Contact } from './screens/contact/contact';
import { News } from './screens/news';
import { Publication } from './screens/publication';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="about" element={<About />}/>
          <Route path="catalog" element={<Catalog />} />
          <Route path="error" element={<Error />} />
          <Route path="catalog/game" element={<GameDescription />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="news/more" element={<Publication />} />
        </Routes>
  );
}

export default App;
