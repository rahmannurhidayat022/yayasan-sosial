import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/Landing/Beranda';
import ProfilLembaga from './pages/Landing/ProfilLembaga';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/profil-lembaga" element={<ProfilLembaga />} />
			</Routes>
		</div>
	);
}

export default App;
