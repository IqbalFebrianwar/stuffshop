import { Link, router } from "@inertiajs/react"

const navbar = () => {
    const onSubmitSearching = e => {
        e.preventDefault()
        router.get("/search/nasduk")
    }

    return <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">TokoIn</Link>
        </div>
        <div className="flex-none gap-2">
            <form onSubmit={onSubmitSearching}>
                <div className="form-control">
                    <input type="search" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </form>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/store">My Store</Link></li>
                    <li><Link href="/logout">Logout</Link></li>
                </ul>
            </div>
        </div> 
    </div>
}

export default navbar