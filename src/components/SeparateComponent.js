import React from 'react'

function SeparateComponent({id}) {
    return (

        <div key={id} className="separate bg-black">
        <div className="br-line"></div>
        </div>


    )
}

export default SeparateComponent
