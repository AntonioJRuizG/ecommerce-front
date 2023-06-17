import Header from '@/components/Header/Header';

import style from '../styles/pagesStyle/account.module.scss';
import { useContext, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import axios from 'axios';
import ExclamationTriangle from '@/components/icons/ExclamationTriangle';
import UserPage from './user';

export default function LogInPage() {
	const router = useRouter()
	const [emailError, setEmailError] = useState(false);

	const userInitialData = {
		name: '',
		email: '',
		password: '',
	};

	const [customerData, setCustomerData] = useState(userInitialData);

	const { currentUser, addUser } = useContext(UserContext);

	const handleChange = (event) => {
		const element = event.target;
		setCustomerData({
			...customerData,
			[element.name]: element.value,
		});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await axios
			.post('/api/login', {
				customerData,
			})
			.catch(function (error) {
				if (error) {
					console.log('loginError');
				}
			});
			
		if (!response.data){
			setEmailError(true);
			return
		}

		if (response.data) {
			setEmailError(false);
			addUser(response.data[0]);
			router.push('/products');
		}

		
	};


	const handleRegisterClick = () =>{
		router.push('/register');
	}

	if (currentUser.name){
		return (<UserPage></UserPage>);
	}

		return (
			<>
				<Header></Header>
				<section className={style.section}>
					<div className={style.sectionForm}>
						<h2 className={style.sectionTitle}>Customer login</h2>
						<form className={style.registerForm} onSubmit={handleSubmit}>
							<label>*Email address</label>
							<input
								type='email'
								name='email'
								value={customerData.email}
								onChange={handleChange}
								required
							></input>
							<label>*Password</label>
							<input
								type='password'
								name='password'
								value={customerData.password}
								onChange={handleChange}
								autoComplete='off'
								required
							></input>
							{emailError ? (
								<div className={style.errorTextBox}>
									<ExclamationTriangle></ExclamationTriangle>{' '}
									<p>The email or password is incorrect</p>
								</div>
							) : null}
							<PrimaryBtn type='submit' btn='secondaryBtn'>
								Sign in
							</PrimaryBtn>
						</form>
					</div>

					<div className={style.sectionNewUser}>
						<h2 className={style.sectionTitle}>New to e-Commerce?</h2>
						<div className={style.newUserText}>
							<p>
								Sign up for a e-Commerce account to gain access to the lowest
								priced products or save your wishlist.
							</p>
							<PrimaryBtn onClick={handleRegisterClick} btn='secondaryBtn'>
								Register
							</PrimaryBtn>
						</div>
					</div>
				</section>
			</>
		);
}