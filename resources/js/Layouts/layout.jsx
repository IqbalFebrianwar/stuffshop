import Navbar from './../Components/navbar'

const layout = ({children}) => {
    return <main>
        <Navbar />
        <div className="mt-5 w-10/12 mx-auto">
            { children }
        </div>
    </main>
}

export default layout