import Layout from "@/Layouts/layout"
import { Head, Link } from "@inertiajs/react"

const search = () => {
    return <>
        <Head>
            <title>Search nasduk</title>
        </Head>

        <div className="grid grid-cols-4 gap-5">
            {
                Array.from({ length: 20 }).map(e => <div className="card w-full bg-base-100 shadow-xl rounded-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link href="/eugene/tempe" className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </>
}

search.layout = page => <Layout children={page} />
export default search