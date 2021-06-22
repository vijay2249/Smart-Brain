import React from 'react';

const Register = ({ onRouteChange }) =>{
	return (
		<article className="center br3 shadow-1 pa3 pa4-ns mv3 ba b--black-10 maxwidth">
		<main className="pa4 black-80"  >
			<form className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<div className="mt3">
						<label className="db fw6 lh-copy f4" htmlFor="name">Name</label>
						<input className="pa2 input-reset input-field-style bg-transparent w-100" type="text" name="name" id="name"/>
					</div>

					<legend className="f2 fw6 ph0 mh0">Register</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset input-field-style bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
						<input className="b pa2 input-reset input-field-style bg-transparent w-100" type="password" name="password"  id="password"/>
					</div>
				</fieldset>
				<div className="">
					<input
						onClick= {() => onRouteChange('home') }
						className="b ph3 pv2 input-reset bg-transparent grow pointer f6 " 
						type="submit" 
						value="Register"
					/>
				</div>
			</form>
		</main>
		</article>
	);
}

export default Register;
// hover-bg-black for the email and password component