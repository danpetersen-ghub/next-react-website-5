import React, { useState } from 'react'
import Link from 'next/link'

const HeroBanner = (props: { name: string }) => {
    const pageName = props.name
    return (
        <section className="bg-cover bg-center bg-no-repeat " style={{ backgroundColor: "#549f93ff" }}>
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <h1 className="text-white text-6xl font-bold leading-tight mb-6">Welcome to {pageName} Page</h1>
                        <p className="text-xl text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor nisi eget ante sollicitudin, id hendrerit dui venenatis.</p>
                        <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
