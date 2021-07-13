import React, {useState} from 'react';

const Register = ({ onRouteChange, updateUIuser }) =>{
	const [registerData, setRegisterData] = useState({
		username: '',
		email: '',
		password: '',
	});
	let {username, email, password} = registerData;

	let handleChange = (e) =>{
		const {name, value} = e.target;
		setRegisterData({...registerData, [name]:value})
	}

	let handleSubmit = (e) =>{
		// fetch('http://localhost:443/register',{
		// 	method: 'post',
		// 	headers: {'Content-Type': 'application/json'},
		// 	body: JSON.stringify({registerData})
		// })
			// .then(Response => Response.json())
			// .then(user =>{
				// if(user){
					updateUIuser(registerData);
					// console.log(user);
					onRouteChange('home');
				// }
			// })
		e.preventDefault();
	}

	return (
		<article className="center br3 shadow-1 pa3 pa4-ns mv3 ba b--black-10 maxwidth">
		<main className="pa4 black-80" >
			<form className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<div className="mt3">
						<label className="db fw6 lh-copy f4" htmlFor="name">Username</label>
						<input 
							className="pa2 input-reset input-field-style bg-transparent w-100" 
							onChange={handleChange} value={username} name="username"
							type="text" id="name"/>
					</div>

					<legend className="f2 fw6 ph0 mh0">Register</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
						<input 
							className="pa2 input-reset input-field-style bg-transparent w-100" 
							onChange={handleChange} value={email}	name="email"
							type="email" id="email-address"/>
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
						<input 
							className="b pa2 input-reset input-field-style bg-transparent w-100" 
							onChange={handleChange} value={password} name="password"
							type="password" id="password"/>
					</div>
				</fieldset>
				<div className="">
					<input
						onClick= {handleSubmit}
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