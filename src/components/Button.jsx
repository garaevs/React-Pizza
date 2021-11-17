import React from 'react';
import classNames from 'classnames';

const Button = ({ className, outline, knopka, children }) => {
	return (
		<div>
			<button
				onClick={knopka}
				className={classNames('button', className, {
					'button--outline': outline,
				})}>
				{children}
			</button>
		</div>
	);
};

export default Button;
