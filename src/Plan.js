import React from 'react'
import { useState } from 'react'
import pic from './hero/icon-music.svg'
import './plan.css'



const Plan = () => {
    const [plan, setPlan] = useState({
        year: 'Annual Plan',
        amount: 59.99,
    })

    function handleChange() {
        setPlan({
            year: 'Monthly Plan',
            amount: 4.99
        })
        if (plan.year === 'Annual Plan' && plan.amount === 59.99) {
            setPlan({ year: 'Monthly Plan', amount: 4.99 })
        } else {
            setPlan({ year: 'Annual Plan', amount: 59.99 })
        }
    }
    // function clearOrder() {
    //     setPlan([])

    // }

    return (
        <div className='Plan'>
            <div className='plan'>
                <img src={pic} alt="" />
                <div className='sub-plan'>
                    <h4>{plan.year}</h4>
                    <p>${plan.amount}/year</p>
                </div>

                <span className='btn1' onClick={handleChange}>change</span>
            </div>

        </div>
    )
}

export default Plan

