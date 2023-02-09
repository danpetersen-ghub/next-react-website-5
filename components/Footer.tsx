import React from 'react'

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8  bottom-0 w-full">
        <div className="container mx-auto">
            <p className="text-center text-sm">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
        </div>
    </footer>
)

export default Footer

