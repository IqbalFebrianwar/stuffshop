import Layout from "@/Layouts/layout"
import { Head, router, useForm } from "@inertiajs/react"

const addProduct = () => {
    const { data, setData, errors, post, processing } = useForm({
        photo: null,
        name: null,
        stock: null,
        price: null,
        description: null
    })

    const handleForm = e => setData(e.target.name, e.target.value)
    const onSubmit = e => {
        e.preventDefault()
        post('/add-product', {
            onSuccess: () => router.get('/profile')
        })
    }

    return <>
        <Head>
            <title>Add Product</title>
        </Head>
 
        <form className="grid grid-cols-2 gap-3 w-6/12 mx-auto" onSubmit={onSubmit}>
            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full rounded-xl" onChange={e => setData("photo", e.target.files[0])} />
                { errors.photo ? <label className="label"><span className="label-text-alt text-red-400">{ errors.photo }</span></label> : null }
            </div>

            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" placeholder="Product Name" className="input input-bordered w-full rounded-xl" name="name" onChange={handleForm} value={data.name} />
                { errors.name ? <label className="label"><span className="label-text-alt text-red-400">{ errors.name }</span></label> : null }
            </div>

            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" placeholder="Price" className="input input-bordered w-full rounded-xl" name="price" value={data.price} onChange={handleForm} />
                { errors.price ? <label className="label"><span className="label-text-alt text-red-400">{ errors.price }</span></label> : null }
            </div>

            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Stock</span>
                </label>
                <input type="number" placeholder="Stock" className="input input-bordered w-full rounded-xl" name="stock" value={data.stock} onChange={handleForm} />
                { errors.stock ? <label className="label"><span className="label-text-alt text-red-400">{ errors.stock }</span></label> : null }
            </div>

            <div className="form-control col-span-2">
                <label  className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered rounded-xl w-full" rows={10} placeholder="Description" name="description" value={data.description} onChange={handleForm}></textarea>
                { errors.description ? <label className="label"><span className="label-text-alt text-red-400">{ errors.description }</span></label> : null }
            </div>

            <button type="submit" className="btn btn-primary rounded-xl col-span-2" disabled={processing}>
                { processing ? <div className="loading loading-spinner"></div> : null }
                Add Product
            </button>
        </form>
    </>
}

addProduct.layout = page => <Layout children={page} />
export default addProduct