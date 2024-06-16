import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Props) => {
	const { className, children, ...rest } = props;
	const combinedClassName = classNames(
		'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
		className
	);

	return (
		<button className={combinedClassName} {...rest}>
			{children}
		</button>
	);
};
