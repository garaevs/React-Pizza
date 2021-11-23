import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
	knopka: PropTypes.func,
};

export default Button;
