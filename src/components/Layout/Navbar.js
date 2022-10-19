import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import { FiMenu, FiPhone } from 'react-icons/fi';
import Button from '../UI/Button';
import Dropdown from '../UI/Dropdown';

const Navbar = (props) => {
	return (
		<header className="sticky flex justify-between items-center border-b-2 border-slate-200 py-2 px-2 md:px-5 lg:px-12 xl:px-40">
			<div className="w-36 pl-2 md:pl-0">
				<Logo />
			</div>
			<ul className="hidden lg:flex font-medium">
				<li className="mr-10">
					<Link to={'/'}>Beranda</Link>
				</li>
				<li className="mr-10">
					<Dropdown label="Donasi">
						<li className="block px-4 py-2 hover:bg-gray-100">
							<Link to="/rekening-donasi">Rekening Donasi</Link>
						</li>
						<li className="block px-4 py-2 hover:bg-gray-100">
							<Link to="/konfirmasi-donasi">Konfirmasi Donasi</Link>
						</li>
					</Dropdown>
				</li>
				<li className="mr-10">
					<Dropdown label="Tentang Kami">
						<li className="block px-4 py-2 hover:bg-gray-100">
							<Link to="/profil-lembaga">Profil Lembaga</Link>
						</li>
						<li className="block px-4 py-2 hover:bg-gray-100">
							<Link to="/visi-misi">Visi & Misi</Link>
						</li>
						<li className="block px-4 py-2 hover:bg-gray-100">
							<Link to="/kontak">Hubungi Kami</Link>
						</li>
					</Dropdown>
				</li>
			</ul>
			<div className="hidden lg:grid grid-cols-2 gap-4">
				<a className="flex items-center mr-2" href="tel:+0222334645">
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
			<div className="lg:hidden" onClick={props.offcanvasToggle}>
				<FiMenu size={32} />
			</div>
		</header>
	);
};

export default Navbar;
