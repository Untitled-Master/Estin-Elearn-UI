import { Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#09090B] text-[#FAFAFA] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side navigation */}
        <div className="flex items-center space-x-8">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/dashboard" className="hover:text-gray-300 transition-colors">
            Dashboard
          </a>
          <a href="/courses" className="hover:text-gray-300 transition-colors">
            My Courses
          </a>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-300 transition-colors">
            <Bell size={20} />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;