"use client"

import { Search, Globe, MapPin, ChevronDown, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const handleSearchToggle = () => {
    setShowSearch(!showSearch)
  }

  const handleDropdownMouseEnter = () => {
    // Keep current dropdown open
  }

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <header
      style={{ fontFamily: "'Roboto', sans-serif" }}
      className="bg-white text-gray-600 fixed top-0 left-0 right-0 z-50"
    >
      <div className="bg-green-800 text-sm hidden lg:block text-white">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <div className="flex items-center">
            <div className="border-r border-green-600 px-6 py-3 hover:bg-green-700 cursor-pointer transition-colors">
              <span className="font-medium">INTERNET BANKING</span>
            </div>
            <div className="border-r border-green-600 px-6 py-3 hover:bg-green-700 cursor-pointer transition-colors">
              <span className="font-medium">FORMS AND GUIDES</span>
            </div>
            <div className="border-r border-green-600 px-6 py-3 hover:bg-green-700 cursor-pointer transition-colors">
              <div className="flex items-center gap-1">
                <span className="font-medium">GET HELP</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
            <div className="px-6 py-3 hover:bg-green-700 cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-base">🇹🇿</span>
                <ChevronDown className="w-3 h-3  mr-4" />

                <Globe className="w-4 h-4" />
                <span className="font-medium">EN</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo - Left */}
          <div className="flex items-center mr-24">
            <img
              src="https://www.crdbbank.co.tz/storage/app/media/images/logo.svg"
              alt="CRDB Bank Logo"
              className="h-10"
            />
          </div>

          {/* Mobile icons - Right side on mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <Phone className="w-5 h-5 text-gray-600" />
            <MapPin className="w-5 h-5 text-gray-600" />
            <Search className="w-5 h-5 text-gray-600" />
            <button onClick={handleMobileMenuToggle}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
            {/* Center Navigation */}
            <nav className="flex items-center space-x-8" onMouseLeave={handleMouseLeave}>
              <a
                href="#"
                className="hover:text-green-600 transition-colors font-medium text-gray-700 border-b-2 border-green-500 pb-1"
              >
                HOME
              </a>

              <div className="relative">
                <button
                  className="hover:text-green-600 transition-colors flex items-center gap-1 font-medium text-gray-700"
                  onMouseEnter={() => handleDropdownToggle("for-you")}
                >
                  FOR YOU
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <button
                  className="hover:text-green-600 transition-colors flex items-center gap-1 font-medium text-gray-700"
                  onMouseEnter={() => handleDropdownToggle("for-business")}
                >
                  FOR YOUR BUSINESS
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <button
                  className="hover:text-green-600 transition-colors flex items-center gap-1 font-medium text-gray-700"
                  onMouseEnter={() => handleDropdownToggle("for-investors")}
                >
                  FOR INVESTORS
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <button
                  className="hover:text-green-600 transition-colors flex items-center gap-1 font-medium text-gray-700"
                  onMouseEnter={() => handleDropdownToggle("about-crdb")}
                >
                  ABOUT CRDB
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="font-medium text-gray-700">FIND US</span>
              </div>

              <div
                className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                onClick={handleSearchToggle}
              >
                <Search className="w-4 h-4" />
                <span className="font-medium text-gray-700">SEARCH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={handleMobileMenuToggle} />

          {/* Right Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="bg-green-700 text-white p-4 flex justify-between items-center">
                <img
                  src="https://www.crdbbank.co.tz/storage/app/media/images/logo.svg"
                  alt="CRDB Bank Logo"
                  className="h-8 filter brightness-0 invert"
                />
                <button onClick={handleMobileMenuToggle}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-gray-800 text-lg font-medium block py-2 border-b border-gray-100">
                        For You
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 text-lg font-medium block py-2 border-b border-gray-100">
                        For Your Business
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 text-lg font-medium block py-2 border-b border-gray-100">
                        For Investors
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 text-lg font-medium block py-2 border-b border-gray-100">
                        About CRDB
                      </a>
                    </li>
                  </ul>

                  {/* Green ACCOUNTS button */}
                  <div className="mt-6">
                    <Button className="bg-green-700 hover:bg-green-800 text-white w-full py-3 text-lg font-medium rounded-lg">
                      ACCOUNTS
                    </Button>
                  </div>

                  {/* Utility links */}
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-gray-800 text-lg block py-2">
                        Find Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 text-lg block py-2">
                        Internet Banking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 text-lg block py-2">
                        Forms and Guides
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 text-lg block py-2">
                        Get Help
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Language selector at bottom */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2 text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-lg">en</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Desktop dropdowns - unchanged */}
      {activeDropdown === "for-you" && (
        <div
          className="bg-white text-gray-800 shadow-lg border-b z-40 w-screen"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex py-8 px-4">
            <div className="w-1/4 bg-gray-50 p-4">
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-green-600">
                    Accounts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Borrow
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Invest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Insure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Ways to Bank
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Treasury Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Diaspora Banking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Premier Banking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Al - Barakah Banking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Remittance Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-3/4 p-6">
              <h3 className="font-semibold text-lg mb-4">Accounts</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Current Account</h4>
                  <p className="text-sm text-gray-600">Every day operating account</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Malkia Account</h4>
                  <p className="text-sm text-gray-600">Account designed for women</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Savings Account</h4>
                  <p className="text-sm text-gray-600">Save for your future needs</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Junior Jumbo Account</h4>
                  <p className="text-sm text-gray-600">Account for your child</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Scholar Account</h4>
                  <p className="text-sm text-gray-600">Account for University Students</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Salary Account</h4>
                  <p className="text-sm text-gray-600">Facilitates salary payments</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Teen Account</h4>
                  <p className="text-sm text-gray-600">Account designed for teens</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Niamoja</h4>
                  <p className="text-sm text-gray-600">An account designed for formal and informal community groups</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Pension Account</h4>
                  <p className="text-sm text-gray-600">A Savings account designed for retirees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "for-business" && (
        <div
          className="bg-white text-gray-800 shadow-lg border-b z-40 w-screen"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex py-8 px-4">
            <div className="w-1/4 bg-gray-50 p-4">
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-green-600">
                    Accounts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Borrow
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Invest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Insure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Treasury Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Corporate Banking Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Ways to bank
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Al - Barakah Banking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Agribusiness
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-3/4 p-6">
              <h3 className="font-semibold text-lg mb-4">Accounts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Biashara Account</h4>
                  <p className="text-sm text-gray-600">
                    A business account tailored for Small and Medium Enterprises (SMEs)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Hodari Account</h4>
                  <p className="text-sm text-gray-600">
                    Designed to serve transactional needs for both formal and informal customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "for-investors" && (
        <div
          className="bg-white text-gray-800 shadow-lg border-b z-40 w-screen"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex py-8 px-4">
            <div className="w-1/3 bg-gray-50 p-4">
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-green-600">
                    Annual General Meeting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Shareholders Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Reports & Dividends
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Investor's Presentations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Investor's News
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-2/3 p-6">
              <h3 className="font-semibold text-lg mb-4">Annual General Meeting</h3>
              <div>
                <h4 className="font-medium mb-2">Annual General Meeting</h4>
                <p className="text-sm text-gray-600">Annual General Meeting for our Shareholders and stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "about-crdb" && (
        <div
          className="bg-white text-gray-800 shadow-lg border-b z-40 w-screen"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-4">About CRDB</h3>
            <div className="grid grid-cols-6 gap-6">
              <div>
                <h4 className="font-medium mb-2">Our Group</h4>
                <p className="text-sm text-gray-600">Our Group</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Our Leadership</h4>
                <p className="text-sm text-gray-600">Our Leadership</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Work with us</h4>
                <p className="text-sm text-gray-600">Work with us</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Media Center</h4>
                <p className="text-sm text-gray-600">Media Center</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Sustainability</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Events</h4>
                <p className="text-sm text-gray-600">Events</p>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6 mt-6">
              <div>
                <h4 className="font-medium mb-2">Tenders</h4>
                <p className="text-sm text-gray-600">Tenders</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Forms & Guides</h4>
                <p className="text-sm text-gray-600">Forms & Guides</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Updated search bar */}
      {showSearch && (
        <div className="bg-white py-4 border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8">Search</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
