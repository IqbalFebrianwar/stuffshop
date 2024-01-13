import { Link, router, useForm, usePage } from "@inertiajs/react"

const navbar = () => {
    const {data, setData} = useForm({
        search: null
    })
    const {props} = usePage()

    const onSubmitSearching = e => {
        e.preventDefault()
        router.get(`/search/${data.search}`)
    }

    return <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl rounded-xl">TokoIn</Link>
        </div>
        <div className="flex-none gap-2">
            <form onSubmit={onSubmitSearching}>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 rounded-xl md:w-auto" value={data.search} onChange={e => setData("search", e.target.value)} />
                </div>
            </form>
            <Link href="/cart" className="btn btn-circle btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg>
            </Link>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={`https://ui-avatars.com/api/?name=${props.auth.user}`} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link href="/profile">Profile</Link></li>
                    <li><button onClick={() => router.post("/auth/signout")}>Logout</button></li>
                </ul>
            </div>
        </div>
    </div>
}

export default navbar