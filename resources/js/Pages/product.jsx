import Layout from "@/Layouts/layout"
import { router, usePage } from "@inertiajs/react"
import Head from "@/Components/product/Head"
import { useState } from "react"

const product = ({ product }) => {
    const {url} = usePage()
    const [amount, setAmount] = useState(null)
    const [errorAmount, setErrorAmount] = useState(null)
    const [isLoadingAddCart, setIsLoadingAddCat] = useState(false)
    const [isLoadingPurchase, setIsloadingPurchase] = useState(false)

    const addToCart = async () => {
        setErrorAmount(null)
        if (amount == null) {
            setErrorAmount("Determine shopping amount")
            return
        }

        setIsLoadingAddCat(true)
        router.put("/cart", {
            id_product: product.id,
            amount: amount
        }, {
            onFinish: () => setIsLoadingAddCat(false)
        })
    }

    const checkout = () => {
        setErrorAmount(null)
        if (amount == null) {
            setErrorAmount("Determine shopping amount")
            return
        }

        setIsloadingPurchase(true)
        router.post(url, [{id: product.id, amount}], {
            onSuccess: () => router.get('/checkout'),
            onFinish: () => setIsloadingPurchase(false)
        })
    }

    return <>
        <Head title={product.name} />

        <div className="w-full flex space-x-40 justify-center">
            <img src={product.photo} alt="" className="w-96 h-80 rounded-xl" />

            <div className="mt-5 grid gap-x-6 justify-around">
                <section className="w-9/12">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    {/* <p>Sold 13</p> */}
                    <h1 className="text-2xl font-semibold">{new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(product.price)}</h1>

                    <h1 className="text-xl font-semibold mt-5">Product Description</h1>
                    <p className="mt-2">{product.description}</p>
                </section>

                <section className="mt-20">
                    <div className="rounded-xl shadow w-full p-6">

                        <label className="form-control w-full mt-2">
                            <div className="label">
                                <span className="label-text">Stock Total : <span className="font-semibold">{product.stock}</span></span>
                            </div>

                            <select className="select select-bordered rounded-xl" value={amount} onChange={e => setAmount(e.target.value)}>
                                <option disabled selected>quantity</option>
                                {
                                    Array.from({ length: product.stock }).map((_, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                                }
                            </select>
                            <label className="label"><span className="label-text-alt text-red-400">{errorAmount}</span></label>

                            <div className="mt-2">
                                <button onClick={checkout} href="/checkout" className="btn btn-primary rounded-xl btn-block">
                                    { isLoadingPurchase ? <div className="loading loading-spinner"></div> : null }
                                    <span>Beli Sekarang</span>
                                </button>
                                <button className="btn btn-primary btn-outline rounded-xl btn-block mt-2" onClick={addToCart} disabled={isLoadingAddCart}>
                                    { isLoadingAddCart ? <div className="loading loading-spinner"></div> : null }
                                    Masuk Keranjang
                                </button>
                            </div>
                        </label>
                    </div>
                </section>
            </div>
        </div>
    </>

}

product.layout = page => <Layout children={page} />
export default product