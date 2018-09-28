import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="row">
					<div className="twelve columns"><h2>Shipment ID 65X-195381-AD1</h2></div>
				</div>
				<div className="row">
					<div className="six columns"><h4>Sender</h4><p>Huayin Pharmaceutical Company<br />0x1152f2593389B827F44d32e30BAbd16AE27cAAcC</p></div>
					<div className="six columns"><h4>Destination</h4><p>Private Client, 10116 Berlin<br />0xfb4037F680323746A911328A33A8bB5cAd16C185</p></div>
				</div>
				<div className="row"><div className="twelve columns"><h4>Sensor</h4><p>0xe4ab65b0Fb324a2FCa0B4f86819F226D6A41Ddf9<br />
				Vihaan Networks Ltd.<br />
				SGN-Nano<br />
				SGNWL300718001<br />
				001.003.006.000<br />
				</p></div></div>
			</div>
		);
	}
}

export default Header;