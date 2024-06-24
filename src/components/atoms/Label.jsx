import React from 'react';

function Label({title, textColor = "day", bgColor = "accent"}) {
  return (
    <div className={`font-dm-semibold uppercase text-${textColor} bg-${bgColor} flex rounded-full text-xs h-fit py-1 px-2 w-fit`}>
        {title}
    </div>
  );
}

export default Label;