import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({dark, setDark}) => {

    const handleMode = ()=>{
        setDark((prev)=>!prev);
    }

    return (
        <div className='shadow-[0_2px_10px_rgba(0,0,0,0.2)] min-h-20 w-full flex items-center'>
            <div className='flex justify-between mx-4 md:mx-16 items-center w-full '>
                <Link to={`/`}>
                <h1 className='font-bold text-base sm:text-3xl hover:cursor-pointer'>Where in the world?</h1></Link>
                <div className='flex items-center text-sm sm:text-xl hover:cursor-pointer' onClick={handleMode}>
                    <MdOutlineDarkMode className='m-2'/>
                    <p>{dark? 'Dark Mode': 'Light Mode'}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar