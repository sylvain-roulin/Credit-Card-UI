import React from 'react';
import mainLogo from '../img/logo.png';
import bankLogo from '../img/bank-logo.png';
import chip from '../img/chip.png';

class FormUI extends React.Component {
	constructor() {
		super();
		this.state = {
			cardNumber: '',
			firstName: '',
			lastName: '',
			expiryMonth: '',
			expiryYear: '',
			cvvCode: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.flipCard = this.flipCard.bind(this);
		this.reverseCard = this.reverseCard.bind(this);
	}

	handleChange(event) {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		})
	}

	flipCard() {
		let cardFront = document.querySelector('.card-component');
		let cardBack = document.querySelector('.card-back');
		cardFront.classList.add('flipped');
		cardBack.classList.add('show');
	}

	reverseCard() {
		let cardFront = document.querySelector('.card-component');
		let cardBack = document.querySelector('.card-back');
		cardFront.classList.remove('flipped');
		cardBack.classList.remove('show');
	}

	render() {
		return(
			<div className="row align-items-center ui-container">
				<div className="col-12 col-md-5">
					<h5>Please enter your credit card details:</h5>
					<form action="">
						<div className="form-card number">
							<label>Card number</label>
							<input
								name="cardNumber"
								type="text"
								value={this.state.cardNumber}
								onChange={this.handleChange}
								placeholder="5555 5555 5555 4444"
								title="Enter your credit card number"
								maxLength="19"
							/>
						</div>
						<div className="form-card name">
							<label>Card owner</label>
							<input
								name="firstName"
								type="text"
								value={this.state.firstName}
								onChange={this.handleChange}
								placeholder="First name"
								title="Enter your first name"
							/>
							<input
								name="lastName"
								type="text"
								value={this.state.lastName}
								onChange={this.handleChange}
								placeholder="Last name"
								title="Enter your last name"
							/>
						</div>
						<div className="form-card expiry">
							<div className="fields-expiry">
								<label>Card expiration date</label>
								<input
									name="expiryMonth"
									type="text"
									value={this.state.expiryMonth}
									onChange={this.handleChange}
									placeholder="05"
									title="Enter the month of expiration"
									maxLength="2"
								/>
								<input
									name="expiryYear"
									type="text"
									value={this.state.expiryYear}
									onChange={this.handleChange}
									placeholder="2019"
									title="Enter the year of expiration"
									maxLength="4"
								/>
							</div>
							<div className="fields-cvv">
								<label>CVV</label>
								<input
									name="cvvCode"
									type="text"
									value={this.state.cvvCode}
									onFocus={this.flipCard}
									onBlur={this.reverseCard}
									onChange={this.handleChange}
									placeholder="542"
									title="Enter the CVV code (3 digits)"
									maxLength="3"
								/>
							</div>
						</div>
					</form>
				</div>
				<div className="col-12 col-md-6 offset-md-1">
					<div className="card-component">

						<div className="card-back">
							<div className="line-dark" />
							<div className="card-cvv-code">
							<span>{this.state.cvvCode ? this.state.cvvCode  : 'CVV'}</span>
						</div>

						</div>
						<div className="card-logo">
							<img src={mainLogo} />
						</div>
						<div className="chip">
							<img src={chip} />
						</div>
						<div className="card-number">
							<span>{this.state.cardNumber ? this.state.cardNumber : '4197 1234 5678 9010'}</span>
						</div>
						<div className="card-expiry-date">
							<span>{this.state.expiryMonth ? this.state.expiryMonth  : '12'} / {this.state.expiryYear ? this.state.expiryYear  : '2020'}</span>
						</div>
						<div className="card-owner">
							<span>{this.state.firstName ? this.state.firstName  : 'Jon'} {this.state.lastName ? this.state.lastName : 'Snow'}</span>
						</div>
						<div className="bank-logo">
							<img src={bankLogo} title="The Iron Bank of Braavos" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FormUI;