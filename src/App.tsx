import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Layout } from "./layouts";
import { TitleResolver } from "./layouts"
import { Login, SignUp } from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TitleResolver />}>
                    <Route element={<Layout />}>
                        <Route index element={<div className="text-[orange]">Hello ba con</div>} />
                        <Route path="about" element={<div>cc</div>} />
                        <Route path="notifications" element={<div>fdsfds</div>} />
                    </Route>
                    <Route path="login" element={<Login />}/>
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="*" element={<div className="text-[orange]">Page not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
