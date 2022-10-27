import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/UI/Loading';
import Donasi from './pages/Landing/Donasi';

const Beranda = lazy(() => import('./pages/Landing/Beranda'));
const ProfilLembaga = lazy(() => import('./pages/Landing/ProfilLembaga'));
const VisiMisi = lazy(() => import('./pages/Landing/VisiMisi'));
const Kontak = lazy(() => import('./pages/Landing/Kontak'));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Beranda />} />
					<Route path="/profil-lembaga" element={<ProfilLembaga />} />
					<Route path="/visi-misi" element={<VisiMisi />} />
					<Route path="/kontak" element={<Kontak />} />
					<Route path="/donasi" element={<Donasi />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
