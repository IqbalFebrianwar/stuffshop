import { Head, Link, useForm } from "@inertiajs/react"

const register = () => {
    const { data, setData, put, processing, errors, reset } = useForm({
        email: '',
        name: '',
        telp: '',
        password: '',
        repeatPassword: ''
    })

    const handleForm = e => {
        setData(e.target.name, e.target.value)
    }

    const onSubmit = async e => {
        e.preventDefault()
        put("/auth/register", {
            onSuccess: () => reset()
        })
    }

    return <>
        <Head>
            <title>Register User</title>
        </Head>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Welcome to our community! To start your new journey, please fill out the registration form below. By including accurate information, you will open the door to exclusive features and personalized experiences. We are committed to providing you with the best experience possible, so please do not hesitate to provide the necessary details. Thank you for joining us, and let's explore everything we have to offer together!</p>
                    <p>Already have an account? <Link href="/auth/login" className="link">login Now</Link></p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-xl">
                    <form className="card-body" onSubmit={onSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded-xl" name="email" value={data.email} onChange={e => handleForm(e)} />
                            {
                                errors.email ? <label className="label"><span className="label-text-alt text-red-400">{ errors.email }</span></label> : null
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered rounded-xl" name="name" value={data.name} onChange={e => handleForm(e)} />
                            {
                                errors.email ? <label className="label"><span className="label-text-alt text-red-400">{ errors.name }</span></label> : null
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Telp</span>
                            </label>
                            <input type="number" placeholder="Telp" className="input input-bordered rounded-xl" name="telp" value={data.telp} onChange={e => handleForm(e)} />
                            {
                                errors.telp ? <label className="label"><span className="label-text-alt text-red-400">{ errors.telp }</span></label> : null
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-xl" name="password" value={data.password} onChange={e => handleForm(e)} />
                            {
                                errors.password ? <label className="label"><span className="label-text-alt text-red-400">{ errors.password }</span></label> : null
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Repeat Password</span>
                            </label>
                            <input type="password" placeholder="Repeat Password" className="input input-bordered rounded-xl" name="repeatPassword" value={data.repeatPassword} onChange={e => handleForm(e)} />
                            {
                                errors.repeatPassword ? <label className="label"><span className="label-text-alt text-red-400">{ errors.repeatPassword }</span></label> : null
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary rounded-xl" disabled={processing}>
                                { processing ? <span className="loading loading-spinner"></span>  : null}
                                <span>Loading</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default register