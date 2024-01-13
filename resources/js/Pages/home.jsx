import Layout from "@/Layouts/layout"
import { Link } from "@inertiajs/react"

const home = ({product}) => {
    return <div className="grid grid-cols-4 gap-5">
        {
            product.map(e => <div className="card w-full bg-base-100 shadow-xl rounded-xl">
                <figure><img src={e.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{e.name}</h2>
                    <p>{ new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(e.price) }</p>
                    <div className="card-actions">
                        <Link href={`${e.id_user}/${e.id}`} className="btn w-full btn-primary">Beli</Link>
                    </div>
                </div>
            </div>)
        }
    </div>
}

home.layout = page => <Layout children={page} />
export default home