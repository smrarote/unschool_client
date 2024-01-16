import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 fixed bottom-0 flex justify-center w-full p-3 z-40">
        <span className="p-2">
          © 2024{'  '}
          <a href="http://sameerarote.info" className="hover:underline" target="_blank">
            Sameer Arote™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
