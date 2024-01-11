import Layout from "@/Layouts/layout"

const product = () => {
    return <h1>Product</h1>
}

product.layout = page => <Layout children={page} />
export default product