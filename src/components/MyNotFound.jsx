import notFound from '../404NotFound.jpg'

const MyNotFound = () =>{
    return(
        <div className='d-flex justify-content-center'>
            <img src={notFound} alt='404 not found' width={750}/>
        </div>
    )
}
export default MyNotFound