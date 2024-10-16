import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-16 bg-white text-gray-600 border-t border-gray-200">
      <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Favicon" width={32} height={32} />
          <span className="font-semibold text-lg">Algo Commerce</span>
        </div>
        <div>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/Adnan0061"
              target="_blank"
              className="hover:text-yellow-600 text-yellow-500"
            >
              Adnan Ahmed
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
