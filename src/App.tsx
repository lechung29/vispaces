import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Layout } from "./layouts";
import { TitleResolver } from "./layouts"
import { Home, Login, MessagePage, SignUp } from "./pages";
import 'react-photo-view/dist/react-photo-view.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TitleResolver />}>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="messages" element={<MessagePage />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="*" element={<div className="text-[orange]">Page not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
