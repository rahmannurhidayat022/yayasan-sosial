import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return (
		<div
			onClick={props.onClose}
			className="fixed top-0 left-0 w-full h-screen z-20 bg-black/40"
		/>
	);
};

const OffcanvasOverlay = (props) => {
	return (
		<div className="fixed top-0 right-0 w-10/12 h-screen z-30 flex justify-center items-center bg-palette-4 text-white font-medium pt-8 pr-5">
			{props.children}
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Offcanvas = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
				portalElement
			)}
		</>
	);
};

export default Offcanvas;
