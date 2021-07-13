import React, {useState} from 'react';
import './SignIn.css';

const SignIn = (props) =>{
	let {onRouteChange, setUserData} = props;
	// const [iscorrectData, setboolean] = useState(true);

	const [signInData, setSignInData] = useState({
		email: '',
		password: ''
	});

	
	let handleChange = (e) =>{
		const {type, value} = e.target;
		setSignInData({...signInData, [type]:value})
	}

	let handleSubmit = (e) =>{
		// fetch('http://localhost:443/signin',{
		// 	method: 'post',
		// 	headers: {'Content-Type': 'application/json'},
		// 	body: JSON.stringify({signInData})
		// })
			// .then(Response => Response.json())
			// .then(data =>{
				// if(data){
					setUserData(signInData);
					onRouteChange('home');
				// }
				// else setboolean(false);
			// })
		e.preventDefault();
	}

	return (
		<article className="center br3 shadow-1 pa3 pa4-ns mv3 ba b--black-10 maxwidth">
		<main className="pa4 black-80" style={{background:'none'}} >
			<form className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f2 fw6 ph0 mh0">Sign In</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
						<input 
							className="input-field-style pa2 input-reset bg-transparent w-100" 
							onChange={handleChange} 
							type="email" 
							name="email-address" 
							value={signInData.email} 
							id="email-address"/>
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
						<input
							className="input-field-style pa2 input-reset bg-transparent w-100" 
							onChange={handleChange} 
							type="password" 
							name="password"
							value={signInData.password}
							id="password"/>
					</div>
				</fieldset>
				<div className="">
					<input
						onClick= {handleSubmit}
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