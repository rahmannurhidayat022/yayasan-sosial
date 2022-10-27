import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import TextArea from '../../components/Form/TextArea';
import LandingLayout from '../../components/Layout/LandingLayout';
import Breadcrumb from '../../components/UI/Breadcrumb';
import Button from '../../components/UI/Button';
import CopyToClipboard from '../../components/UI/CopyToClipboard';
import Spin from '../../components/UI/Spin';

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
	const [fieldNominalLainnya, setFieldNominalLainnya] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		watch,
		unregister,
	} = useForm({
		mode: 'all',
	});

	let nominal = watch('nominal');
	const loading = true;

	useEffect(() => {
		if (nominal === 'lainnya') {
			setFieldNominalLainnya(true);
		} else {
			setFieldNominalLainnya(false);
			unregister('nominal_lainnya');
		}
	}, [nominal, unregister]);

	const onSubmit = (data) => {
		if (!isValid) return;

		const newData = {
			nama_lengkap: data?.nama,
			nominal_donasi:
				data?.nominal !== 'lainnya' ? data?.nominal : data?.nominal_lainnya,
			bank_pengirim: data?.bank,
			jenis_donasi: data?.jenis_donasi,
			alamat: data?.alamat,
			email: data?.email,
			whatsapp: data?.whatsapp,
			keterangan: data?.keterangan,
		};
		console.log(newData);
		reset();
	};

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
				<form onSubmit={handleSubmit(onSubmit)}>
					<Select
						options={{
							...register('jenis_donasi', {
								required: 'Pilih salah satu opsi jenis donasi',
							}),
						}}
						id="jenis_donasi"
						label="Jenis Donasi"
						errorMessage={errors?.jenis_donasi?.message}
						requireIcon="true"
						hasError={!!errors?.jenis_donasi}
					>
						<option value="shodaqoh">Shodaqoh</option>
						<option value="infaq">Infaq</option>
						<option value="qurban">Qurban</option>
						<option value="zakat">Zakat</option>
					</Select>
					<div className="block lg:flex lg:flex-row lg:gap-3">
						<Select
							options={{
								...register('nominal', {
									required: 'Pilih salah satu opsi jenis donasi',
								}),
							}}
							id="nominal"
							label="Nominal"
							errorMessage={errors?.nominal?.message}
							requireIcon="true"
							hasError={!!errors?.nominal}
						>
							<option value="10000">Rp 10.000</option>
							<option value="50000">Rp 50.000</option>
							<option value="100000">Rp 100.000</option>
							<option value="300000">Rp 300.000</option>
							<option value="500000">Rp 500.000</option>
							<option value="lainnya">Lainnya ...</option>
						</Select>
						<Select
							options={{
								...register('bank', {
									required:
										'Pilih salah satu opsi nomor rekening bank milik yayasan',
								}),
							}}
							id="bank"
							label="Pilih Bank"
							errorMessage={errors?.bank?.message}
							requireIcon="true"
							hasError={!!errors?.bank}
						>
							<option value="mandiri">Mandiri</option>
							<option value="bni">Bank BTPN</option>
							<option value="bni">BSI - Bank Syariah Indonesia</option>
							<option value="bni">BNI - Bank Negara Indonesia</option>
							<option value="bri">BRI - Bank Republik Indonesia</option>
							<option value="bni">BCA - Bank Central Asia</option>
						</Select>
					</div>
					{fieldNominalLainnya && (
						<Input
							prefix="Rp"
							options={{
								...register('nominal_lainnya', {
									required: 'Harap isi nominal donasi anda',
									valueAsNumber: true,
									min: {
										value: 10000,
										message: 'Min donasi Rp 10.000',
									},
								}),
								type: 'number',
							}}
							id="nominal_lainnya"
							label="Nominal Lainnya"
							requireIcon="true"
							hasError={!!errors?.nominal_lainnya}
							errorMessage={errors?.nominal_lainnya?.message}
						/>
					)}
					<Input
						options={{
							...register('nama', {
								required: 'Harap isi Nama Lengkap anda',
							}),
							type: 'text',
						}}
						id="nama"
						label="Nama Lengkap"
						requireIcon="true"
						hasError={!!errors?.nama}
						errorMessage={errors?.nama?.message}
					/>
					<TextArea
						id="alamat"
						label="Alamat"
						requireIcon="true"
						errorMessage={errors?.alamat?.message}
						hasError={!!errors?.alamat}
						options={{
							...register('alamat', {
								required: 'Harap isi alamat anda',
							}),
							rows: '4',
						}}
					></TextArea>
					<div className="block lg:flex lg:flex-row lg:gap-3">
						<Input
							prefix="+62"
							options={{
								...register('whatsapp', {
									required: 'Harap isi nomor whatsapp anda',
									valueAsNumber: true,
								}),
								type: 'number',
							}}
							id="whatsapp"
							label="Nomor Whatsapp"
							requireIcon="true"
							hasError={!!errors?.whatsapp}
							errorMessage={errors?.whatsapp?.message}
						/>
						<Input
							options={{
								...register('email', {
									required: 'Harap isi E-Mail aktif anda',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Invalid email address',
									},
								}),
								type: 'email',
							}}
							id="email"
							label="E-Mail"
							requireIcon="true"
							hasError={!!errors?.email}
							errorMessage={errors?.email?.message}
						/>
					</div>
					<TextArea
						id="keterangan"
						label="Keterangan"
						errorMessage={errors?.keterangan?.message}
						hasError={!!errors?.keterangan}
						options={{
							...register('keterangan'),
							rows: '4',
						}}
					></TextArea>
					<Button
						className="flex gap-2"
						options={{
							type: 'submit',
							disabled: !isValid,
						}}
					>
						{loading && <Spin />}
						Selanjutnya
					</Button>
				</form>
			</section>
		</LandingLayout>
	);
};

export default Donasi;
