import React from 'react';

const MainVisual: React.FC = () => {
    return (
        <div className='sm:px-28 px-5'>
            <div className="sm:mt-14 sm:w-3/4 sm:relative sm:h-[830px] w-full">
                <div className='flex sm:flex-col flex-col-reverse gap-5'>
                    <div className='flex gap-10 flex-col sm:flex-row'>
                        <div className='flex gap-2 justify-center'>
                            <img alt="Telegram" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/11062b_e98838ff3ed04690a4d6de29d5936f77~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_e98838ff3ed04690a4d6de29d5936f77~mv2.png" className="w-10 h-10 object-cover" />
                            <img alt="Instagram" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png" className="w-10 h-10 object-cover" />
                            <img alt="Twitter" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png" className="w-10 h-10 object-cover" />
                            <img alt="GitHub" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/11062b_2439efec5ecc4d44b0dc6986da28e4bb~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2439efec5ecc4d44b0dc6986da28e4bb~mv2.png" className="w-10 h-10 object-cover" />
                        </div>
                        <span className='rounded-full bg-white text-purple shadow-custom-purple py-2 px-4 w-2/3 mx-auto sm:w-52 sm:mx-0'>LIVE-PRE-SALE</span>
                        <span className='rounded-full bg-white text-purple shadow-custom-purple py-2 px-4 w-2/3 mx-auto sm:w-52 sm:mx-0'>LITE-PAPER</span>
                    </div>
                    <div className='mt-5 flex sm:justify-between w-full sm:relative sm:flex-row flex-col gap-5'>
                        <div className='text-left w-full'>
                            <div className='sm:text-[80px] text-[50px] font-bold font-suez text-darkPurple leading-tight'>
                                Welcome to <br />GODSWILL <br />Ecosystem
                            </div>
                            <div className='font-serif text-2xl text-darkPurple' style={{ fontFamily: "sans-serif" }}>
                                "Divine Justice Awaits Your Next Move!"
                            </div>
                        </div>
                        <div className='sm:absolute sm:-top-10 sm:right-0 mt-5'>
                            <img
                                src="https://static.wixstatic.com/media/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png/v1/fill/w_393,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png"
                                alt="Godswill Ecosystem"
                                className="sm:w-96 sm:h-90 w-full h-full object-cover"
                                srcSet="https://static.wixstatic.com/media/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png/v1/fill/w_393,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png 1x, https://static.wixstatic.com/media/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png/v1/fill/w_585,h_533,al_c,lg_1,q_85,enc_auto/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png 2x"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
                <div className='sm:absolute sm:bottom-0 sm:right-10 w-full sm:w-3/4'>
                    <img
                        src="https://static.wixstatic.com/media/7a45de2e827c42c4b4a11f7f13a869a5.png/v1/fill/w_720,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7a45de2e827c42c4b4a11f7f13a869a5.png"
                        alt=""
                        className="sm:w-[720px] sm:h-[471px] w-full h-full object-cover"
                        srcSet="https://static.wixstatic.com/media/7a45de2e827c42c4b4a11f7f13a869a5.png/v1/fill/w_720,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7a45de2e827c42c4b4a11f7f13a869a5.png 1x, https://static.wixstatic.com/media/7a45de2e827c42c4b4a11f7f13a869a5.png/v1/fill/w_1440,h_942,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7a45de2e827c42c4b4a11f7f13a869a5.png 2x"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainVisual;
