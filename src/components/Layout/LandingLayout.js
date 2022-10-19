import Navbar from './Navbar';

const LandingLayout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
		</>
	);
};

export default LandingLayout;
