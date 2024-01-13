import Layout from "@/Layouts/layout"
import { Head, Link } from "@inertiajs/react"

const search = ({ product, query }) => {
    return <>
        <Head>
            <title>{ `Search ${query}` }</title>
        </Head>

        <div className="grid grid-cols-4 gap-5">
            {
                product.map(e => <div className="card w-full bg-base-100 shadow-xl rounded-xl" key={e.id}>
                    <figure><img src={e.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{ e.name }</h2>
                        <p>{ new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(e.price) }</p>
                        <div className="card-actions justify-end">
                            <Link href={`/${e.id_user}/${e.id}`} className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </>
}

search.layout = page => <Layout children={page} />
export default search