import Layout from "@/Layouts/layout"
import { Head, Link, router } from "@inertiajs/react"

const profile = ({ user, product }) => {
    return <>
        <Head>
            <title>Profile</title>
        </Head>

        <div className="flex gap-x-3 justify-center">
            <div className="avatar">
                <div className="w-52 rounded-full">
                    <img src={`https://ui-avatars.com/api/?name=${user.name}`} />
                </div>
            </div>

            <section>
                <h1 className="text-4xl font-semibold">{ user.name }</h1>
                <p>{ user.email }</p>
                <p>{ user.telp }</p>

                <div className="flex gap-x-2">
                    <Link href="/add-product" className="btn btn-primary mt-2 rounded-xl btn-outline">Add Product</Link>
                    <button className="btn btn-primary mt-2 rounded-xl" onClick={() => router.post("/auth/signout")}>Sign Out</button>
                </div>
            </section>
        </div>

        <div className="mt-5">
            <h1 className="text-4xl font-semibold">My Product</h1>
            
            <div className="grid grid-cols-4 gap-5 mt-3">
                {
                    product.map(e => <div className="card w-full bg-base-100 shadow-xl rounded-xl" key={e.id}>
                        <figure><img src={e.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{ e.name }</h2>
                            <p>{ new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(e.price) }</p>
                            <p>Stock remaining { e.stock }</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

profile.layout = page => <Layout children={page} />
export default profile