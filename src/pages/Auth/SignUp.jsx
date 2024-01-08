import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            image: '',
            password: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .required("Please enter a password")
                .min(8, "Password must have at least 8 characters")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                ),
        })
    })
    return (
        <div>

            <form onSubmit={formik.handleSubmit} className='bg-primary py-12   lg:w-1/3 mx-auto rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold text-white pb-8'>Please Sign up</h2>
                <div className='w-1/2 flex flex-col items-center space-y-3 text-left mx-auto'>
                    <div>

                        <label className='text-white ' htmlFor="fullName">Full Name</label>

                        <br />
                        <input
                            className='rounded-md py-2 px-4'
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder='Full Name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <div className='text-red-700 font-medium'>{formik.errors.fullName}</div>
                        ) : null}
                    </div>
                    <div>
                        <label className='text-white' htmlFor="email">Email Address</label>
                        <br />
                        <input
                            className='rounded-md py-2 px-4'
                            id="email"
                            name="email"
                            type="email"
                            placeholder='Enter your email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-red-700 font-medium'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className=''>
                        <label className='text-white' htmlFor="email">Your password</label>
                        <br />
                        <input
                            className='rounded-md py-2 px-4'
                            id="password"
                            name="password"
                            type="password"
                            placeholder='Enter your password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-red-700  text-center font-medium'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className='flex justify-center items-center'>

                        <button className='py-2 bg-lime-500 btn rounded-lg shadow-lg px-4 text-white font-semibold my-4' type="submit">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default SignUp;