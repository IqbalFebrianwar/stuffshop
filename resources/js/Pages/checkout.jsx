import Layout from "@/Layouts/layout"
import { Head } from "@inertiajs/react"

const checkout = () => {
    return <>
        <Head>
            <title>Checkout</title>
        </Head>

        <h1 className="text-2xl font-semibold">Checkout</h1>

        <div className="mt-3 flex gap-x-5">
            <section className="w-9/12">
                <div className="rounded-xl shadow-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-400 uppercase">Shipping Address</h1>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam exercitationem, porro sit consectetur tempore nisi pariatur temporibus similique, maxime ullam eius rerum quos debitis ex magnam ducimus reprehenderit nemo itaque!</p>
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

                <div className="mt-10 shadow-xl rounded-xl p-6 flex gap-x-2">
                    <div className="avatar">
                        <div className="w-24 mask mask-squircle">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <section className="w-9/12">
                        <h1 className="font-semibold">Product Name</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ducimus illo temporibus saepe, ratione tempora consequuntur labore ipsum facere optio dolore, voluptate quaerat animi dicta, nobis fugiat? Autem, veniam voluptatibus.</p>
                        <p className="font-semibold">1x</p>
                    </section>

                    <section className="flex-1">
                        <h1 className="text-2xl font-semibold">Rp 144.000</h1>
                    </section>
                </div>
            </section>

            <section className="flex-1">
                <div className="p-6 rounded xl shadow-lg">
                    <div className="w-full shadow-lg rounded-xl p-6">
                        <h1 className="text-xl font-semibold">Total shopping</h1>
                        <div className="flex justify-between items-center mt-4">
                            <h1 className="text-gray-700">Total</h1>
                            <h1 className="text-xl font-semibold">Rp 400.000</h1>
                        </div>

                        <button className="mt-3 btn btn-block btn-primary rounded-xl">Buy</button>
                    </div>
                </div>
            </section>
        </div>

        <dialog id="address_modal" className="modal">
            <div className="modal-box rounded-xl">
                <h3 className="font-bold text-lg">Change Address</h3>
                <form>
                    <div className="form-control mt-2">
                        <textarea className="textarea textarea-bordered rounded-xl w-full" rows={10} placeholder="Full Address"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary rounded-xl mt-3">Save</button>
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