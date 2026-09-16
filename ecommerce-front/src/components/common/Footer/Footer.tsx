const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-extrabold tracking-tight lowercase">my</span>
          <span className="px-2 py-0.5 bg-gray-900 text-white rounded-md text-sm font-bold tracking-tight">
            Ecom
          </span>
        </div>
        <p className="text-sm text-gray-500">© 2024 Our Ecom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
