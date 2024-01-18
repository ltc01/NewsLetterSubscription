import { useState } from "react";
import { Letter } from "./Letter";


export const Button = ({ text }) => {
    return (
        <button
            className='w-full bg-[#242742] shadow-sm shadow-[#242742] hover:bg-[#ff6257] hover:shadow-sm hover:shadow-[#ff6257] p-3 rounded-md text-white mt-3'
            type='submit'
        >{text}</button>
    )
}

export const Signup = () => {
    const list = [
        "Product discovery and building what matters",
        "Measuring to ensure updates are a success",
        "And much more!"
    ];
    const [email, setEmail] = useState('');
    const [submit, setsubmit] = useState(false);
    const handleFormSubmit = (e) => { 
        e.preventDefault();   
        setsubmit(true);
      }
  
    return (
        <>
            { submit ? <Letter email = {email} /> :
                <div className='rounded-2xl max-sm:p-0 max-sm:flex-col-reverse max-sm:w-full max-sm:rounded-none max-sm:h-full w-[60%] h-[80%] p-3 flex bg-white'>
                    <div className='w-[55%] max-sm:w-full h-full'>
                        <div className='w-full h-full py-14 px-8'>
                            <h1 className="text-3xl font-bold pb-3 text-[#242742]">Stay updated!</h1>
                            <p className="text-[#242742]">Join 60,000+ product managers receiving monthly updates on:</p>
                            <ul className='py-4'>
                                {list.map((item, index) => (
                                    <li className='flex gap-3 py-1' key={index}>
                                        <img src="/images/icon-list.svg" alt="" />
                                        <h1 className="text-[#242742]">{item}</h1>
                                    </li>
                                ))}
                            </ul>
                            <form action="" onSubmit={handleFormSubmit}>
                                <label htmlFor="email">Email address</label>
                                <input type="email"
                                name="email"
                                id="email"
                                    placeholder='email@company.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoFocus
                                    className='block border-2 p-1 pl-3 rounded-lg w-full focus:border-[#9294a0] my-2' />
                                <Button text={"Subscribe to monthly newsletter"} />
                            </form>
                        </div>
                    </div>
                    <div
                        className="w-[45%] max-sm:w-full max-sm:relative max-sm:rounded-none rounded-xl overflow-hidden bg-purple-400 h-full">
                        <img src="/images/illustration-sign-up-mobile.svg" alt="" className='max-sm:w-full h-full max-sm:block object-cover' />    
                        <img src="/images/illustration-sign-up-desktop.svg" alt="" className='w-full h-full max-sm:hidden object-cover' />
                    </div>
                </div>
            }
        </>
    )
}
