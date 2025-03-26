// import React from "react";

// const Label = ({ text, bgColor = "bg-gray-100", textColor = "text-gray-700", icon: Icon }) => {
//   return (
//     <div className={`flex items-center gap-1 px-2 py-1 text-sm font-medium rounded ${bgColor} ${textColor}`}>
//       {Icon && <Icon className="w-4 h-4 text-yellow-500" />}
//       {text}
//     </div>
//   );
// };

// export default Label;


// import React from "react";

// const Label = ({ text, icon: Icon, className = "" }) => {
//   return (
//     <div className={`inline-flex items-center gap-1 px-2 py-1 text-sm font-medium rounded bg-gray-100 text-gray-700 ${className}`}>
//       {Icon && <Icon className="w-4 h-4 text-yellow-500" />}
//       {text}
//     </div>
//   );
// };

// export default Label;


import React from "react";

const Label = ({ text, icon: Icon, className = "", props }) => {
  return (

    <div className={`inline-flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-sm border ${className}`} {...props}>
      {Icon && <Icon className="w-4 h-4 text-yellow-500" />}
      {text}
    </div>
  );
};

export default Label;
