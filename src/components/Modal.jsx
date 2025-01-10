import { X } from 'lucide-react'
import React, { Children } from 'react'

const Modal = ({children, openModal, setOpenModal, extraClass}) => {
  return (
    <div id='wrapper' onClick={(e) => e.target.id == "wrapper" ? setOpenModal(false) : ""} className={`fixed inset-0 flex items-center justify-center duration-300 bg-[#00000079] ${openModal ? "scale-1" : "scale-0"}`}>
        <div className={`w-[500px] h-[300px] bg-white rounded-md relative ${extraClass}`}>
            <button onClick={() => setOpenModal(false)} className='absolute top-2 right-2'><X width={22} height={22}/></button>
            {children}
        </div>
    </div>
  )
}

export default Modal