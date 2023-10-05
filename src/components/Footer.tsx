import {TbBrandInstagram,TbBrandGithub,TbBrandFacebook} from 'react-icons/tb'

interface FooterProps{
    
}

export default function Footer({}:FooterProps ){
    return(
        <>
            <div className=' bg-[#213343] w-full py-10 px-12 text-white'>
                <ul className=' flex justify-center items-center gap-5'>
                    <li className=''>
                        <a target='_blank' href="https://github.com/MohammedAslam106">
                            <TbBrandGithub className='mobile:w-8 mobile:h-8 mobile:p-1 w-10 h-10 border-2 rounded-full p-2 cursor-pointer hover:border-orange-400 hover:text-orange-400 '/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=100041960631732">
                            <TbBrandFacebook className='mobile:w-8 mobile:h-8 mobile:p-1 w-10 h-10 border-2 rounded-full p-2 cursor-pointer hover:border-orange-400 hover:text-orange-400 ' size={50}/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.instagram.com/mohammedaslam4106/?next=%2F">
                            <TbBrandInstagram className='mobile:w-8 mobile:h-8 mobile:p-1 w-10 h-10 border-2 rounded-full p-2 cursor-pointer hover:border-orange-400 hover:text-orange-400 ' size={50}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}