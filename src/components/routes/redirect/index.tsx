import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion"
import LoadingIcon from "@/components/icons/loadingicon";
import "./index.scss"

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
		<motion.section className="g-redirect-page-section">
            <LoadingIcon color="#5488c7" size={20} />
			<motion.p style={{ textAlign: "center"}}>{message}</motion.p>
		</motion.section>
	);
};

export default RedirectToAuth;