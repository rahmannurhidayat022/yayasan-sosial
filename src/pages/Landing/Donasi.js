import LandingLayout from '../../components/Layout/LandingLayout';
import Breadcrumb from '../../components/UI/Breadcrumb';
import CopyToClipboard from '../../components/UI/CopyToClipboard';

const rekening = [
	{
		id: 1,
		bank: 'Mandiri',
		nomor: '1440012576986',
		pemilik: 'Yayasan Al-Hidayah Baitul Hatim',
	},
	{
		id: 2,
		bank: 'BRI',
		nomor: '0220012576986',
		pemilik: 'Solichin',
	},
];

const Donasi = () => {
	const renderData = rekening?.map(({ bank, nomor, pemilik }, index) => {
		return (
			<li key={index} className="mb-2">
				<div className="flex flex-row gap-4">
					<span className="font-semibold">Bank {bank}:</span>
					<CopyToClipboard value={nomor} />
				</div>
				<span>a.n. {pemilik}</span>
			</li>
		);
	});

	return (
		<LandingLayout>
			<Breadcrumb title="Formulir Donasi" />
			<section className="container-custom py-6">
				<h2 className="text-lg font-semibold mb-5">
					Rekening Donasi Yayasan Al-Hidayah Baitul Hatim:
				</h2>
				<ul className="">{renderData}</ul>
			</section>
			<section className="container-custom py-6">
				<h2 className="text-lg font-semibold mb-5">Formulir Donasi</h2>
			</section>
		</LandingLayout>
	);
};

export default Donasi;
