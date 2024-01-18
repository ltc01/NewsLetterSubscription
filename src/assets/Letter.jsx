import React from 'react'
import { Button } from './Signup'

export const Letter = ({ email }) => {
    return (
        <div className='w-[30%] max-sm:w-full max-sm:flex max-sm:gap-56 max-sm:flex-col max-sm:justify-end max-sm:h-full max-sm:rounded-none rounded-xl py-7 px-10 bg-white h-[60%]'>
            <div>
                <img src="/images/icon-list.svg" alt="" className='w-12' />
                <h1 className="text-3xl font-bold py-4 text-[#242742]">Thanks for subscribing!</h1>
                <p className="leading-tight text-[#36384e] py-2">
                    A confirmation email has been sent to {" " + email + " "}
                    Please open it and click the button inside to confirm your subscription.
                </p>
            </div>
            <Button text={"Dismiss message"} />
        </div>
    )
}
