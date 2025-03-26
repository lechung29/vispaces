import React from "react";
import { Outlet } from "react-router-dom";
import RedirectToAuth from "../redirect";
import { useAppSelector } from "@/redux/store/store";
import { userState } from "@/redux/reducers";

const ProtectedRoute: React.FunctionComponent = () => {
	const { user } = useAppSelector(userState)
	return user ? <Outlet /> : <RedirectToAuth to="/login" message={"Bạn chưa đăng nhập. Chuyển đến trang đăng nhập"} />;
};

export default ProtectedRoute;