import Header from '@/components/Header/Header';
import style from '../styles/pagesStyle/account.module.scss';
import { useContext, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import axios from 'axios';
import ExclamationTriangle from '@/components/icons/ExclamationTriangle';
import Link from 'next/link';

export default function LogInPage() {
	const [passwordError, setPasswordError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
	const router = useRouter();

  	const userInitialData = {
			name: '',
			email: '',
      password:''
		};

	const [customerData, setCustomerData] = useState(userInitialData);

	const { addUser } = useContext(UserContext);

	const handleChange = (event) => {
		const element = event.target;
		if(element.name === 'password' && element.value.length < 6){
			setPasswordError(true)
		} else {
			setPasswordError(false);
		}
		setCustomerData({
			...customerData,
			[element.name]: element.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
    const response = await axios
			.post('/api/register', {
				customerData,
			})
			.catch(function (error) {
				if (error) {
					console.log('registerError');
				}
			});

			if(response?.data === 'customerExists'){
				setEmailAlreadyExists(true);
				return
			}

			if (response){
				addUser(customerData);
			}

			router.push('/products');
	};

	return (
		<>
			<Header></Header>
			<section className={style.section}>
				<div className={style.sectionForm}>
					<h2 className={style.sectionTitle}>Register</h2>
					<form className={style.registerForm} onSubmit={handleSubmit}>
						<label>*Name</label>
						<input
							type='name'
							name='name'
							value={customerData?.name || ''}
							onChange={handleChange}
							required
						></input>
						<label>*Email address</label>
						<input
							type='email'
							name='email'
							value={customerData?.email || ''}
							onChange={handleChange}
							required
						></input>
						{emailError ? (
							<div className={style.errorTextBox}>
								<ExclamationTriangle></ExclamationTriangle>{' '}
								<p>Email address must be a valid email</p>
							</div>
						) : null}
						<label>*Password</label>
						<input
							type='password'
							name='password'
							value={customerData?.password || ''}
							onChange={handleChange}
							autoComplete='off'
							required
						></input>
						{passwordError ? (
							<div className={style.errorTextBox}>
								<ExclamationTriangle></ExclamationTriangle>{' '}
								<p>The password must be at least 6 characters long</p>
							</div>
						) : null}
						{emailAlreadyExists ? (
							<div className={style.errorTextBox}>
								<ExclamationTriangle></ExclamationTriangle>{' '}
								<p>
									Email adress already exists. Go to{' '}
									{<Link href={'/login'}>login</Link>} form or reset your
									password.
								</p>
							</div>
						) : null}
						<PrimaryBtn type='submit' btn='secondaryBtn'>
							Register
						</PrimaryBtn>
					</form>
				</div>
			</section>
		</>
	);
}
