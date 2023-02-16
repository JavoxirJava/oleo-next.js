import '@/styles/globals.css'
import "@/styles/style.scss"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/component/Layout";
import {ToastContainer} from "react-toastify";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <ToastContainer/>
            <Component {...pageProps} />
        </Layout>

    )
}
