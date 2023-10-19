import Errorimg from './assets/Errorimg.png'
import { Footer } from './footer'

function Error() {
    return (
        <>
            <div className='flex justify-center mt-10'>
                <div className='mr-36'>
                    <div>
                        <h1 className='text-4xl font-bold'>Page not found</h1>
                        <p className='text-gray-500 mt-8'>It seems like we dont find what you searched. The page you<br></br> were looking for doesn't exist, isn't available loading<br></br> incorrectly.</p>
                        <div className='hover:scale-100 duration-500 cursor-pointer'>
                            <button className='border border-pink-500 w-48 h-14 rounded-md text-white bg-pink-500 mt-8 ' type="button">Back To Home</button>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img className='w-96' src={Errorimg} alt=""></img>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Error