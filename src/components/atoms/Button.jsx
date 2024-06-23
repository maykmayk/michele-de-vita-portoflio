import React from 'react';

function Button({title}) {
  return (
    <div className="text-day900 flex rounded-full text-xs border border-day900 h-fit py-1 px-2 cursor-pointer hover:bg-accent hover:border-accent hover:text-day100 transition ease-in-out ">
        {title}
    </div>
  );
}

export default Button;