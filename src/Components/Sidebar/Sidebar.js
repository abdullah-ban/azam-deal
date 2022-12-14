import React from 'react';
import { ImHome } from 'react-icons/im';
import { BsInfoCircleFill } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import { RiContactsBookFill } from 'react-icons/ri';
import { RiAdminFill } from 'react-icons/ri';
import { RiMailSettingsFill } from 'react-icons/ri';

const Sidebar = () => {
    return (
        <div>
            <div>
                <ul className='text-lg text-black p-5'>
                    <li className='font-extrabold text-2xl text-gray-600 pb-3'>Information</li>
                    <hr />
                    <div className='my-5'>
                        <li className='flex py-3 px-3'><ImHome className='m-1 mr-3' /><span>Home</span></li>
                        <li className='flex py-3 px-3'><BsInfoCircleFill className='m-1 mr-3' /><span>About</span></li>
                        <li className='flex py-3 px-3'><BsTelephoneFill className='m-1 mr-3' /><span>Phone</span></li>
                        <li className='flex py-3 px-3'><RiContactsBookFill className='m-1 mr-3' /><span>Contact</span></li>
                        <li className='flex py-3 px-3'><RiAdminFill className='m-1 mr-3' /><span>Admin</span></li>
                        <li className='flex py-3 px-3'><RiMailSettingsFill className='m-1 mr-3' /><span>Mails</span></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar