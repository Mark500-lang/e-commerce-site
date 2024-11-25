import { Link } from "react-router-dom";

function Footer(){
    return(
    <footer className="bg-gray-100">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Logo & Name </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                    <li>
                        <Link to='/' className="hover:underline me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                        <Link to='/shop' className="hover:underline me-4 md:me-6">Shop</Link>
                    </li>
                    <li>
                        <Link to='/' className="hover:underline me-4 md:me-6">Deals & Promotions</Link>
                    </li>
                    <li>
                        <Link to='/contacts' className="hover:underline">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
            <span className="block text-sm sm:text-center">© 2024 <Link to='/' className="hover:underline">Logo™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
    )
}

export default Footer;