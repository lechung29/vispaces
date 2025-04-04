import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.scss"
import { LoadingIcon } from "@/components/icons";

interface IRedirectPageProps {
	to: string;
	message: string;
}

const RedirectToAuth: React.FunctionComponent<IRedirectPageProps> = (props) => {
    const { to, message } = props;
	const [count, setCount] = React.useState(5);
	const navigate = useNavigate();
	const location = useLocation();

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCount((preValue) => preValue - 1);
		}, 1000);
		if (count === 0) {
			navigate(`${to}`, {
				state: location.pathname,
			});
        }
		return () => clearInterval(interval);
	}, [count, navigate, location, props.to]);
    
	return (
		<section className="g-redirect-page-section">
            <LoadingIcon 
				color="#5488c7"
				fontWeight={500}
				withLoadingText={false} 
				size={20} 
			/>
			<p style={{ textAlign: "center"}}>{message}</p>
		</section>
	);
};

export default RedirectToAuth;