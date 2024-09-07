"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/chat') {
    return null;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authStatus, setAuthStatus] = useState({
    isAdmin: false,
    isProjectManager: false,
    loggedInUser: "",
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastOrangeButton, setIsPastOrangeButton] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const moreRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const isAdminDashboard = pathname === "/dashboard";
  const isProjectManagerDashboard = pathname === "/project-manager";
  const isContactPage = pathname === "/contact";

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    {
      name: "Portfolio",
      href: "/aboutus",
      items: [
        { name: "Portfolio", href: "/portfolio" },
        { name: "Project", href: "/Projects" },
      ],
    },
    {
      name: "Careers",
      href: "/Careers",
      items: [
        { name: "Careers", href: "/careers" },
        { name: "Resources", href: "/resources" },
        { name: "Team", href: "/team" },
        { name: "Partners", href: "/partners" },
      ],
    },
    { name: "Services", href: "/services" },
    {
      name: "More",
      items: [
        { name: "Events", href: "/events" },
        { name: "News", href: "/news" },
        { name: "Our Media", href: "/social-media" },
        { name: "Technology Stack", href: "/technology" },
      ],
    },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const checkUserStatus = () => {
      setAuthStatus({
        isAdmin: localStorage.getItem("isAdminAuthenticated") === "true",
        isProjectManager: localStorage.getItem("isProjectManagerAuthenticated") === "true",
        loggedInUser: localStorage.getItem("loggedInUser") || "",
      });
    };

    checkUserStatus();
    window.addEventListener("storage", checkUserStatus);

    return () => {
      window.removeEventListener("storage", checkUserStatus);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const orangeButton = document.querySelector('.waterfall-btn');
      if (orangeButton) {
        const rect = orangeButton.getBoundingClientRect();
        setIsPastOrangeButton(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("isProjectManagerAuthenticated");
    localStorage.removeItem("loggedInUser");
    setAuthStatus({ isAdmin: false, isProjectManager: false, loggedInUser: "" });
    router.push("/");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      if (credentials.username === "admin" && credentials.password === "admin") {
        localStorage.setItem("isAdminAuthenticated", "true");
        localStorage.setItem("loggedInUser", "Admin");
        setAuthStatus({ isAdmin: true, isProjectManager: false, loggedInUser: "Admin" });
        router.push("/dashboard");
      } else if (credentials.username === "manager" && credentials.password === "manager") {
        localStorage.setItem("isProjectManagerAuthenticated", "true");
        localStorage.setItem("loggedInUser", "Project Manager");
        setAuthStatus({ isAdmin: false, isProjectManager: true, loggedInUser: "Project Manager" });
        router.push("/project-manager");
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login");
    }

    setShowLoginModal(false);
  };

  const handleCredentialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
          showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        } ${
          isPastOrangeButton
            ? 'bg-[#112365] text-white'
            : isScrolled
              ? 'bg-[#112365] bg-opacity-30 backdrop-blur-sm text-white'
              : 'bg-transparent text-white'
        } ${
          isAdminDashboard || isProjectManagerDashboard
            ? 'bg-white text-black'
            : ''
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button onClick={() => handleNavigation("/")} className={`text-3xl font-extrabold ${
              isAdminDashboard || isProjectManagerDashboard
                ? 'text-black'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500'
            }`}>
              OSlicod
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative" ref={item.items ? dropdownRef : null}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`text-base font-semibold transition duration-300 focus:outline-none
                          ${openDropdown === item.name 
                            ? "text-blue-300" 
                            : isAdminDashboard || isProjectManagerDashboard
                              ? "text-black hover:text-blue-600"
                              : "text-white hover:text-blue-300"
                          }
                        `}
                      >
                        {item.name}
                        <svg className={`inline-block ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.items.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.href)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                role="menuitem"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`text-base font-semibold transition duration-300
                        ${isActive(item.href) 
                          ? "text-blue-300" 
                          : isAdminDashboard || isProjectManagerDashboard
                            ? "text-black hover:text-blue-600"
                            : "text-white hover:text-blue-300"
                        }
                      `}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {!isContactPage && (
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="px-4 py-2 text-sm rounded-lg transition duration-300 border-2 bg-transparent text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Contact Us
                </button>
              )}
              {authStatus.isAdmin || authStatus.isProjectManager ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => router.push(authStatus.isAdmin ? "/dashboard" : "/project-manager")}
                    className={`px-4 py-2 text-sm rounded-lg transition duration-300 ${
                      (authStatus.isAdmin && isAdminDashboard) || (authStatus.isProjectManager && isProjectManagerDashboard)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    {authStatus.isAdmin ? "Admin Dashboard" : "Project Manager Dashboard"}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className={`text-base font-semibold transition duration-300
                    ${isAdminDashboard || isProjectManagerDashboard
                      ? "text-black hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                    }
                  `}
                >
                  Login
                </button>
              )}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-2 pb-4 px-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.items ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`px-2 py-1 text-base font-semibold transition duration-300 focus:outline-none
                            ${openDropdown === item.name ? "text-blue-300" : "text-white hover:text-blue-300"}
                          `}
                        >
                          {item.name}
                          <svg className={`inline-block ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {openDropdown === item.name && (
                          <div className="ml-4 mt-2">
                            {item.items.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.href)}
                                className="block w-full text-left px-2 py-1 text-sm text-white hover:text-blue-300 transition duration-300"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`px-2 py-1 text-base font-semibold transition duration-300
                          ${isActive(item.href) ? "text-blue-300" : "text-white hover:text-blue-300"}
                        `}
                        >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {showLoginModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
        <button
          onClick={() => setShowLoginModal(false)}
          className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleCredentialChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-200 bg-gray-100 focus:bg-white peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
          >
            
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleCredentialChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-200 bg-gray-100 focus:bg-white peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
          >
            
          </label>
        </div>
        {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/client-portal" className="text-blue-600 hover:underline">Sign up here</a>
        </p>
      </div>
    </div>
  </div>
)}      
</>
);
};

export default Navbar;