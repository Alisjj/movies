import React from "react";
import {Menu} from '@headlessui/react';

function MenuItem({name}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <span
          // href="#"
          className={`flex items-center px-4 py-2 text-sm 
                    ${active ? "bg-yellow-500 text-white" : "text-gray-700 "}
                    `}>
          {name}
        </span>
      )}
    </Menu.Item>
  );
}

export default MenuItem;
