import img from '../marcoKebab.jpg'

const MyAdv = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <a href='https://paypal.me/DomenicoVillani99?country.x=IT&locale.x=it_IT' className='no-decoration'>
                <div className='d-flex my-card my-animation align-items-center adv'>
                    <div className='mx-5'>
                        <p>Pubblicità:</p>
                        <p>Cerchi un kebabbaro di fiducia a 3 minuti da casa tua?</p>
                        <p>Scegli MarKebab, sempre pronto per le tue schimicate!</p>
                    </div>
                    <img src={img} alt='pubblicita' width={200} className='rounded-circle' />
                </div>
            </a>
        </div >
    )
}
export default MyAdv