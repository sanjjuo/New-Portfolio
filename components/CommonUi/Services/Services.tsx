import React from 'react'
import { services } from '../../../Data/data'

const Services = () => {
    return (
        <>
            <div className='p-5 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-1'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className='p-6 h-60 text-center bg-appColor-secondary/10 transition transform duration-700
            hover:bg-appColor-primary rounded-none cursor-pointer'
                    >
                        <div className='space-y-3 flex flex-col items-center justify-center'>
                            <span className='w-32 h-32'>{service.icon}</span>
                            <h3 className='text-xl font-medium app-text'>{service.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services
