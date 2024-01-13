import Layout from "@/Layouts/layout"
import { Head, router, useForm } from "@inertiajs/react"
import { useState } from "react"

const checkout = ({ user, product }) => {
    const [isLoadingCheckout, setIsloadingCheckout] = useState(false)
    const { data: dataAddress, setData: setDataAddress, processing: processingAddress, post: postAddress, errors: errorsAddress } = useForm({
        address: user.address
    })

    const onSubmit = e => {
        e.preventDefault()
        postAddress("/checkout", {
            dataAddress,
            onSuccess: () => document.querySelector("#address_modal").close()
        })
    }

    const onSubmitCheckout = () => {
        setIsloadingCheckout(true)
        router.put("/checkout", {}, {
            onFinish: () => setIsloadingCheckout(false),
            onSuccess: () => router.get("/")
        })
    }

    return <>
        <Head>
            <title>Checkout</title>
        </Head>

        <h1 className="text-2xl font-semibold">Checkout</h1>

        <div className="mt-3 flex gap-x-5">
            <section className="w-9/12">
                <div className="rounded-xl shadow-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-400 uppercase">Shipping Address</h1>
                    <p className="mt-2">{user.address}</p>
                    <button className="btn btn-sm btn-primary rounded-xl btn-outline mt-2" onClick={() => document.querySelector("#address_modal").showModal()}>Change Address</button>
                </div>

                <div className="rounded-xl shadow-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-400 uppercase">Payment Method</h1>
                    <div className="mt-2">
                        <div className="form-control w-fit">
                            <label className="label cursor-pointer gap-x-2">
                                <input type="radio" name="radio-10" className="radio" checked />
                                <span className="label-text">Paypal</span>
                            </label>
                        </div>
                    </div>
                </div>

                {
                    product.map(e => <div className="mt-10 shadow-xl rounded-xl p-6 flex gap-x-2" key={e.id}>
                        <div className="avatar">
                            <div className="w-24 mask mask-squircle">
                                <img src={e.photo} />
                            </div>
                        </div>

                        <section className="w-9/12">
                            <h1 className="font-semibold">{e.name}</h1>
                            <p>{e.description}</p>
                            <p className="font-semibold">{e.amount}x</p>
                        </section>

                        <section className="flex-1">
                            <h1 className="text-2xl font-semibold">{ new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(e.price * e.amount) }</h1>
                        </section>
                    </div>)
                }
            </section>

            <section className="flex-1">
                <div className="p-6 rounded xl shadow-lg">
                    <div className="w-full shadow-lg rounded-xl p-6">
                        <h1 className="text-xl font-semibold">Total shopping</h1>
                        <div className="flex justify-between items-center mt-4">
                            <h1 className="text-gray-700">Total</h1>
                            <h1 className="text-xl font-semibold">{new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(product.reduce((sum, e) => sum + e.price, 0))}</h1>
                        </div>

                        <button className="mt-3 btn btn-block btn-primary rounded-xl" disabled={isLoadingCheckout} onClick={onSubmitCheckout}>
                            { isLoadingCheckout ? <span className="loading loading-spinner"></span> : null }
                            <span>Buy</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>

        <dialog id="address_modal" className="modal">
            <div className="modal-box rounded-xl">
                <h3 className="font-bold text-lg">Change Address</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-control mt-2">
                        <textarea className="textarea textarea-bordered rounded-xl w-full" rows={10} placeholder="Full Address" value={dataAddress.address} onChange={e => setDataAddress('address', e.target.value)}></textarea>
                        <label className="label"><span className="label-text-alt text-red-400">{errorsAddress.address}</span></label>
                    </div>

                    <button type="submit" className="btn btn-primary rounded-xl mt-3" disabled={processingAddress}>
                        {processingAddress ? <span className="loading loading-spinner"></span> : null}
                        <span>Save</span>
                    </button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>
}

checkout.layout = page => <Layout children={page} />
export default checkout