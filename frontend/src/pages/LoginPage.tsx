import LoginForm from '@/components/forms/LoginForm';

const LoginPage = () => {
	return (
		<div className='flex min-h-dvh min-w-full items-center justify-center'>
			<div className='h-[400px] w-[600px] flex-auto flex-grow-0 border border-white px-4 py-2'>
				<h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
					LOG IN
				</h1>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
