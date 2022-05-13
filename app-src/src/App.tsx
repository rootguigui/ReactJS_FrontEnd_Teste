import { BrowserRouter } from 'react-router-dom';
import './assets/sass/style.scss';
import { Header } from './components/headers';
import { HOC } from './components/HOC';
import { Sidebar } from './components/sidebars/sidebar';

export default () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Header/>
        <div className="container">
          <Sidebar />
          <HOC />
        </div>
      </div>
    </BrowserRouter>
  );
}
