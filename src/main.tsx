import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';

const theme = createTheme({
  /** Put your mantine theme override here */

});

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>,
)
