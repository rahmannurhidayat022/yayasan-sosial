import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

const LandingLayout = (props) => {
	const { offcanvasVisible } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	const offcanvasToggle = () => {
		dispatch(uiActions.offcanvasToggle());
	};

	return (
		<>
			<Navbar offcanvasToggle={offcanvasToggle} />
			{props.children}
			{offcanvasVisible && <Sidemenu offcanvasToggle={offcanvasToggle} />}
		</>
	);
};

export default LandingLayout;
