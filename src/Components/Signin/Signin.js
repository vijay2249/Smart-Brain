import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) =>{
	return (
		<article className="center br3 shadow-1 pa3 pa4-ns mv3 ba b--black-10 maxwidth">
		<main className="pa4 black-80" style={{background:'none'}} >
			<form className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f2 fw6 ph0 mh0">Sign In</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
						<input className="input-field-style pa2 input-reset bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
						<input className="input-field-style pa2 input-reset bg-transparent w-100" type="password" name="password"  id="password"/>
					</div>
					<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
				</fieldset>
				<div className="">
					<input
						onClick= {() => onRouteChange('home')}
						className="b ph3 pv2 input-reset bg-transparent grow pointer f6" 
						type="submit" 
						value="Sign in"
					/>
				</div>
				<div className="lh-copy mt3">
					<p onClick= {() => onRouteChange('register')} className="f4 link dim black db pointer">Register</p>
					<a href="#0" className="f6 link dim black db pointer">Forgot your password?</a>
				</div>
			</form>
		</main>
		</article>
	);
}

export default SignIn;
// hover-bg-black for the email and password component