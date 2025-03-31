import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Theme accentColor={"crimson"} grayColor={"sand"} radius={"large"} scaling={"95%"}>
    <Provider store={store}>
      <App />
      <ThemePanel />
    </Provider>
  </Theme>,
)
