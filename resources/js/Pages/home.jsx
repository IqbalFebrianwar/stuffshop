import Layout from "@/Layouts/layout"
import { Link } from "@inertiajs/react"

const home = () => {
    return <div className="grid grid-cols-4 gap-5">
        {
            Array.from({ length: 20 }).map(e => <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link href="/product/tempe" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>)
        }
    </div>
}

home.layout = page => <Layout children={page} />
export default home