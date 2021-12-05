import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, outline, onClick, children }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={classNames('button', className, {
					'button--outline': outline,
				})}>
				{children}
			</button>
		</div>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;
