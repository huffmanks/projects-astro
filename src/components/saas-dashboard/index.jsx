import SAASContextProvider from '../../context/SAASContext'
import Buckets from './Buckets'
import Layout from './layout'

const SAASDashboard = () => {
    return (
        <SAASContextProvider>
            <Layout>
                <Buckets />
            </Layout>
        </SAASContextProvider>
    )
}

export default SAASDashboard
