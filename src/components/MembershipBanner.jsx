import React from 'react';

const MembershipBanner = () => {
  const messages = [
    { text: "🍃 30% Off With Membership Card" },
    { text: "20% Off for Khmer New Year" },
    { text: "$5 Registration Fee" },
  ];

  // Duplicate the list twice for seamless loop
  const repeatedMessages = [...messages, ...messages];

  return (
    <div className="border-2 border-gray-200 overflow-hidden">
      <div className=" bg-stone-200">
        <div className="flex animate-scroll-left whitespace-nowrap divide-x divide-[#403d2c] text-[#403d2c] font-semibold uppercase text-sm w-max">
          {repeatedMessages.map((msg, index) => (
            <div key={index} className="flex items-center gap-2 px-6 py-4">
              <span className='text-xl'>{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipBanner;
