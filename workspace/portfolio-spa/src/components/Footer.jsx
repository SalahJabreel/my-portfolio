export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-100">
      <div className="container py-6 text-center text-sm text-gray-500">
        © {year} صلاح الدين جبريل. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}