import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/style.scss';
import { Header } from './components/headers';
import { HOC } from './components/HOC';
import { Sidebar } from './components/sidebars/sidebar';
import { ModalProvider } from './context/modal-context';
import { store } from './store';

export default () => {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <div className="main">
            <Header/>
            <div className="container">
              <Sidebar />
              <HOC />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}
