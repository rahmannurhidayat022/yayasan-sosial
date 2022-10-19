const Button = (props) => {
	const classesArray = [
		'bg-palette-1 text-white font-medium py-4 px-8 rounded-[12px] shadow-md hover:bg-focus-1',
	];
	if (props.className !== undefined) {
		props.className && classesArray.push(props.className);
	}

	return (
		<button className={classesArray.join(' ')} {...props.options}>
			{props.children}
		</button>
	);
};

export default Button;
