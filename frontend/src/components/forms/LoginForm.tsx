import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';

interface formFields {
	username: string;
	password: string;
}

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<formFields>();

	const formSubmitHandler: SubmitHandler<formFields> = (data) => {
		console.log(data);
	};

	console.log(watch('username'));

	return (
		<form onSubmit={handleSubmit(formSubmitHandler)}>
			<div>
				<Label htmlFor='username'>Username</Label>
				<Input
					id='username'
					type='text'
					{...register('username', { required: true })}
				/>
				{errors.username && (
					<span className='font-thin text-red-400'>
						Username required
					</span>
				)}
			</div>
			<div>
				<Label htmlFor='password'>Password</Label>
				<Input
					id='password'
					type='password'
					{...register('password', { required: true })}
				/>
				{errors.password && (
					<span className='font-thin text-red-400'>
						Password required
					</span>
				)}
			</div>
			<div>
				<Button type='submit'>Login</Button>
				<Button type='reset' variant={'destructive'}>
					Login
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
