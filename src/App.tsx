import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Layout } from "./layouts";
import { TitleResolver } from "./layouts"
import { Home, Login, SignUp } from "./pages";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TitleResolver />}>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<div>
                            <PhotoProvider>
                                <PhotoView src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw32znYzMxJ0Mmc2hUYglTMi&ust=1732675426683000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKD6xYz9-IkDFQAAAAAdAAAAABAE">
                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw0-MBZ_XUE7_2zrfWsUcpog&ust=1732618313891000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjEs6yo94kDFQAAAAAdAAAAABAR" alt="" />
                                </PhotoView>
                                <PhotoView src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw0-MBZ_XUE7_2zrfWsUcpog&ust=1732618313891000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjEs6yo94kDFQAAAAAdAAAAABAR">
                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw0-MBZ_XUE7_2zrfWsUcpog&ust=1732618313891000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjEs6yo94kDFQAAAAAdAAAAABAR" alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>} />
                        <Route path="notifications" element={<div>fdsfds</div>} />
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
