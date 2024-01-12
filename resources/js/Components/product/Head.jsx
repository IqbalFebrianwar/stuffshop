import { Head } from "@inertiajs/react"

const head = ({ title }) => {
    return <Head>
        <title>{ `Sell ${title}` }</title>
    </Head>
}

export default head