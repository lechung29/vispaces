import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { AuthLayout, Layout } from "./layouts";
import { TitleResolver } from "./layouts"
import { Home, Login, MessagePage, SignUp } from "./pages";
import 'react-photo-view/dist/react-photo-view.css';
import ProtectedRoute from "./components/routes/protectedroute";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TitleResolver />}>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route element={<Layout />} >
                            <Route path="messages" element={<MessagePage />} />
                        </Route>
                    </Route>
                    <Route element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="sign-up" element={<SignUp />} />
                    </Route>
                    <Route path="*" element={<div className="text-[orange]">Page not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
