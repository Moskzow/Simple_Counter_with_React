import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
	let unit = props.seconds;
	let ten = 0;
	let hundred = 0;
	let thousand = 0;
	let tenThousand = 0;

	if (props.seconds > 9) {
		ten = Math.trunc(props.seconds / 10);
		unit = props.seconds % 10;
		if (ten > 9) {
			hundred = Math.trunc(ten / 10);
			ten = ten % 10;
			if (hundred > 9) {
				thousand = Math.trunc(hundred / 10);
				hundred = hundred % 10;
				if (thousand > 9) {
					tenThousand = Math.trunc(thousand / 10);
					thousand = thousand % 10;
				}
			}
		}
	}
	return (
		<div className="app d-flex justify-content-center">
			<div className="icon box">
				<i className="fas fa-hourglass-half"></i>
			</div>

			<div className="counter box">{tenThousand}</div>
			<div className="counter box">{thousand}</div>
			<div className="counter box">{hundred}</div>
			<div className="counter box">{ten}</div>
			<div className="counter box">{unit}</div>
		</div>
	);
};

Counter.propTypes = {
	seconds: PropTypes.number
};
