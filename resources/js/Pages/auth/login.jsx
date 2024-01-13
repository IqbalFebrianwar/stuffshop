import { Head, Link, useForm } from "@inertiajs/react"

const login = () => {
    const { data, setData, errors, processing, post } = useForm({
        email: '',
        password: ''
    })

    const handleForm = e => setData(e.target.name, e.target.value)
    const onSubmit = e => {
        e.preventDefault()
        post("/auth/login")
    }

    return <>
        <Head>
            <title>Login User</title>
        </Head>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow bg-base-100 rounded-xl">
                    <form className="card-body" onSubmit={onSubmit}>
                    <h1 className="text-lg font-bold">Selamat Datang, Login Sekarang!!!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded-xl" name="email" value={data.email} onChange={handleForm} />
                            { errors.email ? <label className="label"><span className="label-text-alt text-red-400">{ errors.email }</span></label> : null }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-xl" name="password" value={data.password} onChange={handleForm} />
                            { errors.password ? <label className="label"><span className="label-text-alt text-red-400">{ errors.password }</span></label> : null }
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary rounded-xl" disabled={processing}>
                                { processing ? <span className="loading loading-spinner"></span> : null }
                                <span>Login</span>
                            </button>
                        </div>
                        <p>Belum Mempunyai Akun? <Link href="/auth/register" className="link">Daftar Sekarang</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default login