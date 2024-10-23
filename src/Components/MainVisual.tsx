import React from 'react';

const MainVisual: React.FC = () => {
    return (
        <div className="mt-14 w-3/4 relative h-[800px]">
            <div className='flex flex-col'>
                <div className='flex gap-10'>
                    <div className='flex gap-2'>
                        <img alt="Telegram" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/11062b_e98838ff3ed04690a4d6de29d5936f77~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_e98838ff3ed04690a4d6de29d5936f77~mv2.png" className="w-10 h-10 object-cover" />
                        <img alt="Instagram" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png" className="w-10 h-10 object-cover" />
                        <img alt="Twitter" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png" className="w-10 h-10 object-cover" />
                        <img alt="GitHub" data-ssr-src-done="true" fetchPriority="high" src="https://static.wixstatic.com/media/11062b_2439efec5ecc4d44b0dc6986da28e4bb~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2439efec5ecc4d44b0dc6986da28e4bb~mv2.png" className="w-10 h-10 object-cover" />
                    </div>
                    <span className='rounded-full bg-white text-purple shadow-custom-purple py-2 px-4'>LIVE-PRE-SALE</span>
                    <span className='rounded-full bg-white text-purple shadow-custom-purple py-2 px-4'>LITE-PAPER</span>
                </div>
                <div className='mt-5 flex justify-between w-full relative'>
                    <div className='text-left'>
                        <div className='text-[80px] font-bold font-suez text-darkPurple leading-tight'>
                            Welcome to <br />GODSWILL <br />Ecosystem
                        </div>
                        <div className='font-serif text-2xl text-darkPurple' style={{ fontFamily: "sans-serif" }}>
                            "Divine Justice Awaits Your Next Move!"
                        </div>
                    </div>
                    <div className='absolute -top-10 right-0    '>
                        <img
                            src="https://static.wixstatic.com/media/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png/v1/fill/w_393,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png"
                            alt="Godswill Ecosystem"
                            className="w-96 h-90 object-cover"
                            srcSet="https://static.wixstatic.com/media/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png/v1/fill/w_393,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png 1x, https://static.wixstatic.com/media/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png/v1/fill/w_585,h_533,al_c,lg_1,q_85,enc_auto/a00646_13b7772a1c9d471ab39c1dda0364881e~mv2.png 2x"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-5 right-10'>
                <img
                    src="https://static.wixstatic.com/media/7a45de2e827c42c4b4a11f7f13a869a5.png/v1/fill/w_720,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7a45de2e827c42c4b4a11f7f13a869a5.png"
                    alt=""
                    className="w-[720px] h-[471px] object-cover visible"
                    srcSet="https://static.wixstatic.com/media/7a45de2e827c42c4b4a11f7f13a869a5.png/v1/fill/w_720,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7a45de2e827c42c4b4a11f7f13a869a5.png 1x, https://static.wixstatic.com/media/7a45de2e827c42c4b4a11f7f13a869a5.png/v1/fill/w_1440,h_942,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7a45de2e827c42c4b4a11f7f13a869a5.png 2x"
                    fetchPriority="high"
                />
            </div>
        </div>
    );
};

export default MainVisual;
