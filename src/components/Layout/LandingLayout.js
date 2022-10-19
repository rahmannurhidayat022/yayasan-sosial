import { FiPhone } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiActions } from '../../store/ui-slice';
import Button from '../UI/Button';
import Offcanvas from '../UI/Offcanvas';
import Navbar from './Navbar';

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
			{offcanvasVisible && (
				<Offcanvas onClose={offcanvasToggle}>
					<div className="">
						<ul className="flex flex-col">
							<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-blue-100 hover:text-blue-900 hover:font-semibold">
								<Link to="/">Beranda</Link>
							</li>
							<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-blue-100 hover:text-blue-900 hover:font-semibold">
								Donasi
							</li>
							<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-blue-100 hover:text-blue-900 hover:font-semibold">
								Tentang Kami
							</li>
						</ul>
						<hr className="my-4" />
						<div className="flex flex-col">
							<a
								className="flex justify-center items-center rounded-lg mb-4 bg-blue-100 py-3 text-slate-700"
								href="tel:+0222334645"
							>
								<FiPhone size={'24'} />
								<span className="ml-2">022 2334645</span>
							</a>
							<Button
								options={{
									type: 'link',
									href: '/donasi',
								}}
							>
								Donasi
							</Button>
						</div>
					</div>
				</Offcanvas>
			)}
		</>
	);
};

export default LandingLayout;
