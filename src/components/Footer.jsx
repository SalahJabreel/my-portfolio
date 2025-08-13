import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600">
      © {new Date().getFullYear()} صلاح الدين جبريل. جميع الحقوق محفوظة.
    </footer>
  );
}

export default Footer;