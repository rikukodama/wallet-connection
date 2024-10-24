import React, { useState, ChangeEvent } from 'react';
import searchIcon from "../assets/searchIcon.svg";

const SearchBox: React.FC = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState<string>('');

  // Handler for input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className='border border-black h-fit flex p-2 gap-2 mt-2'>
    <img src= {searchIcon} alt="searchIcon" className='w-4 h-4 items-center mt-1'/>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Search"
      className='focus:outline-none bg-mainBG w-full'
    />
    </div>
  );
};

export default SearchBox;
