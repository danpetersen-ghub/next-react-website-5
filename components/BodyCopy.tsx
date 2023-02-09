import React from 'react'

interface Props {
    title: string;
    copy: string;
}

const BodyCopy: React.FC<Props> = ({ title, copy }) => (
    <>
        <h2 className="text-lg font-large text-gray-900 mb-4 pt-6 pr-6 pl-6 pb-0">{title}</h2>
        <p className="text-base leading-relaxed text-gray-700 pt-0 pr-6 pl-6 pb-6">
            {copy}
        </p>
    </>
)

export default BodyCopy
