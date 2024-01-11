import Layout from "@/Layouts/layout"
import { Head } from "@inertiajs/react"

const profile = () => {
    return <>
        <Head>
            <title>Profile</title>
        </Head>

        <div className="flex gap-x-3 justify-center">
            <div className="avatar">
                <div className="w-52 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>

            <section>
                <h1 className="text-4xl font-semibold">Eugene Feilian Putra Rangga</h1>
                <p>eugenefeilianputrarangga@gmail.com</p>
                <p>088223755564</p>
                <button className="btn btn-primary mt-2">Sign Out</button>
            </section>
        </div>
    </>
}

profile.layout = page => <Layout children={page} />
export default profile