import dynamic from 'next/dynamic'

const TehranMap = dynamic(() => import('../utils/TehranMap'), {ssr: false})
import Estates from './estates/index'
import Workmates from './components/Workmates'
import Blogs from './Blogs'
import Customers from './components/Customers'
import Shematic from './components/Shematic'
import Advertisement from './components/Advertisement'
import Cities from './components/Cities'
import Landing from './components/Landing'


const Home = () => {
    return (
        <>
            <Landing/>
            <Estates/>
            <Cities/>
            <Advertisement/>
            <Shematic/>
            <TehranMap/>
            <Customers/>
            <Blogs/>
            <Workmates/>
        </>
    )
}

export default Home