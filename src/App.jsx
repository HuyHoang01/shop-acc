import './App.scss';
import HomePage from './Components/HomePage'
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/nap-tien" element={<h1 style={{color: '#fff'}}>Nạp tiền</h1>} />
					<Route path="/atm" element={<h1 style={{color: '#fff'}}>ATM</h1>} />
					<Route path="/quan-huy" element={<h1 style={{color: '#fff'}}>Quân huy</h1>} />
					<Route path="/login" element={<h1 style={{color: '#fff'}}>Login</h1>} />
					<Route path="/register" element={<h1 style={{color: '#fff'}}>Register</h1>} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)

}

export default App;
