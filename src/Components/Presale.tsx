import React from "react";

const Presale: React.FC = () => {
    return (
        <div className="bg-darkPurple items-center sm:py-10 py-5">
            <div className="max-w-4xl mx-auto px-4 sm:w-[45%] w-[90%] bg-white text-black p-6 flex flex-col gap-5">
                <div className="text-left sm:flex">
                    <span className="text-2xl text-black mb-8 sm:ml-10 ml:0">LIVE PRE-SALE!</span>
                    <span className="text-2xl text-black mb-8 ml-10 sm:block hidden">LIVE PRE-SALE!</span>
                    <span className="text-2xl text-black mb-8 ml-10 sm:block hidden">LIVE PRE-SALE!</span>
                </div>
                <h1 className="text-3xl font-bold text-center text-black mb-4" style={{ fontFamily: "playfairdisplay-bold" }}>Get Some GWT Tokens Before <br /> WE GO LIVE!</h1>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="nickname" className="block text-sm font-medium text-black text-left" >Nick Name</label>
                        <input type="text" id="nickname" name="nickname" className="mt-1 block w-full py-2 px-3 focus:outline-none bg-mainBG" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-black mb-2 text-left" style={{ fontFamily: "playfairdisplay-bold" }}>Initial Token Offering (ITO): 10%</h2>
                        <p className="text-black mb-4 text-left">(150 million tokens)</p>
                    </div>

                    <div>
                        <p className="text-black mb-4">SEND YOUR SOLANA TO THIS ADDRESS YOUR TOKENS WILL BE DELIVERED ON THE DAY OF LAUNCH</p>
                        <p className="text-2xl text-left break-words">9YzrNA1SD36iZdxSLce7wRsfwK5xCFAawcaqMkBZhTzQ</p>
                    </div>

                    <div>
                        <label htmlFor="solana-address" className="block text-sm font-medium text-black text-left">Your Solana Address<span className="text-red-500">*</span></label>
                        <input type="text" id="nickname" name="nickname" className="mt-1 block w-full py-2 px-3 focus:outline-none bg-mainBG" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black text-left">Your Email<span className="text-red-500">*</span></label>
                        <div className="flex">
                            <input type="text" id="nickname" name="nickname" className="block w-full py-2 px-3 focus:outline-none bg-mainBG" required placeholder="e.g., email@example.com" />
                            <span className="w-full py-2 px-3 bg-white border-mainBG hover:bg-none border-4 rounded-none hover:cursor-pointer">Join Our White-List</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="subscribe" name="subscribe" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="subscribe" className="ml-2 block text-sm text-black">I want to subscribe to your WHITE-LIST.</label>
                    </div>

                    <p className="text-black text-left">Thank You for Contributing!</p>
                </form>
            </div>
        </div>
    );
};

export default Presale;