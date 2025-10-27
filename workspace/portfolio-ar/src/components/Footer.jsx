export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 py-6 mt-12">
      <div className="container-responsive text-center text-gray-600 text-sm">
        © {year} صلاح الدين جبريل. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}