import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
    return (
        <div className="sm:px-36 px-10">
            <div className="flex items-center justify-center mb-6">
                <Logo />
            </div>
            <p className="text-2xl mb-12">Championing ethical governance and fairness in all aspects of the community.</p>
            <hr className="border-t-1 border-darkPurple sm:mb-10 mb-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-8 gap-0">
                <div className="sm:p-10 p-5 text-left items-start">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-base leading-relaxed text-gray-500">
                        <a href="mailto:Godswill_GWT@proton.me" className="hover:text-grey-500 text-gray-500">Godswill_GWT@proton.me</a><br />
                        Tel: 123-456-7890<br />
                        123 Blockchain Ave<br />
                        San Francisco, CA 94158
                    </p>
                </div>
                <div className="sm:p-10 p-5 text-left items-start">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="text-base leading-relaxed">
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Initiatives</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Community</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Technology</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Partnerships</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">About Us</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Cookie Policy</a></li>
                    </ul>
                </div>
                <div className="sm:p-10 p-5 text-left items-start">
                    <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
                    <ul className="text-base leading-relaxed">
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Twitter</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">GitHub</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Medium</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Telegram</a></li>
                        <li><a href="#" className="hover:text-grey-500 text-gray-500">Discord</a></li>
                    </ul>
                </div>
                <div className="sm:p-10 p-5 text-left items-start">
                    <h3 className="text-xl font-semibold mb-4 sm:pl-5 pl-0">Follow Us On</h3>
                    <div className='flex gap-2'>
                            <img alt="Telegram" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/11062b_e98838ff3ed04690a4d6de29d5936f77~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_e98838ff3ed04690a4d6de29d5936f77~mv2.png" className="w-10 h-10 object-cover" />
                            <img alt="Instagram" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png" className="w-10 h-10 object-cover" />
                            <img alt="Twitter" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png" className="w-10 h-10 object-cover" />
                            <img alt="GitHub" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/11062b_2439efec5ecc4d44b0dc6986da28e4bb~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2439efec5ecc4d44b0dc6986da28e4bb~mv2.png" className="w-10 h-10 object-cover" />
                        </div>
                </div>
            </div>
            <hr className="border-t-1 border-darkPurple mt-5 mb-3" />
            <div className="flex items-center justify-center sm:flex-row flex-col gap-5 mb-5">
                <p className="text-base text-gray-500 sm:mr-10 mr-0">© 2024 GODSWILL Ecosystem. All rights reserved.</p>
                <p className="text-sm text-gray-500">© 2024 by MEME Maker Universe</p>
                <a href="https://acommasterdao.wixsite.com/meme-maker-universe" target="_blank" rel="noreferrer noopener" className="inline-block mt-2">
                    <img src="https://static.wixstatic.com/media/a00646_23abd3a162684ab1a192e42c56406d0f~mv2.png/v1/fill/w_105,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/meme-maker-universe.png" 
                         alt="meme-maker-universe" 
                         className="w-[105px] h-[105px] object-cover"
                         width="105" 
                         height="105" 
                         loading="lazy" 
                    />
                </a>
                <p className="text-base text-gray-600">
                    <a href="https://acommasterdao.wixsite.com/godswill-ecosystem/terms-and-conditions" target="_self" className="hover:underline">Terms & Conditions</a>
                    <span className="mx-2">/</span>
                    <a href="https://acommasterdao.wixsite.com/godswill-ecosystem/privacy-policy" target="_self" className="hover:underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;