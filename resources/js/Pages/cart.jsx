import { Head, router } from "@inertiajs/react"
import Layout from "@/Layouts/layout"

const cart = ({ product }) => {
    const checkout = () => {
        let data = []
        product.map(e => data.push({id: e.id_product, amount: e.amount}))
        router.post('/cart', data, {
            onSuccess: () => router.get("/checkout")
        })
    }

    return <>
        <Head>
            <title>Cart</title>
        </Head>

        <h1 className="text-2xl font-bold">Cart</h1>

        <div className="flex gap-x-5 w-full justify-between">
            <section className="w-9/12">
                {
                    product.map(e => <div className="mt-10 shadow-xl rounded-xl p-6 flex gap-x-2">
                        <div className="avatar">
                            <div className="w-24 mask mask-squircle">
                                <img src={e.photo} />
                            </div>
                        </div>

                        <section className="w-9/12">
                            <h1 className="font-semibold">{ e.name }</h1>
                            <p>{ e.description }</p>
                            <p>{ e.amount }x</p>
                        </section>

                        <section className="flex-1">
                            <h1 className="text-2xl font-semibold">{ new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(e.price * e.amount) }</h1>
                            <button className="btn rounded-xl btn-ghost btn-block mt-2" onClick={() => router.delete(`/cart/${e.id}`)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </section>
                    </div>)
                }
            </section>

            <section className="flex-1">
                <div className="w-full shadow-lg rounded-xl p-6">
                    <h1 className="text-xl font-semibold">Total shopping</h1>
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-gray-700">Total</h1>
                        <h1 className="text-xl font-semibold">{new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(product.reduce((sum, e) => sum + (e.price * e.amount), 0))}</h1>
                    </div>

                    <button className="mt-3 btn btn-block btn-primary rounded-xl" onClick={checkout}>Buy({product.length})</button>
                </div>
            </section>
        </div>
    </>
}

cart.layout = page => <Layout children={page} />
export default cart