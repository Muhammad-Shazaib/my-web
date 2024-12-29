import Image from "next/image"; // Import Image from Next.js
import { FaSortDown } from "react-icons/fa"; // Import FaSortDown icon from react-icons/fa

export default function AllProducts() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-1/4 bg-white p-6 border-r">
        {/* New Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">New</h2>
          <div className="h-10 bg-gray-200 rounded flex items-center justify-center mt-4">
            <span className="text-lg font-medium text-gray-600">500</span>
          </div>
        </div>

        {/* Collections Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Collections</h2>
        <ul className="space-y-2 mb-6">
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Shoes</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Jackets</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Shirts</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Pants</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Accessories</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Sweaters</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Hats</li>
        </ul>

        {/* Gender Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Gender</h2>
        <ul className="space-y-2 mb-6">
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Male</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Female</li>
        </ul>

        {/* Boys and Girls Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">For</h2>
        <ul className="space-y-2 mb-6">
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Boys</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Girls</li>
        </ul>

        {/* Sort By Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Sort By</h2>
        <ul className="space-y-2">
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Price</li>
          <li className="h-10 bg-gray-200 rounded flex items-center justify-center">Unit</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Filters and Sort By Icons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4 ">
            <p>Hide Filter</p>
            <div className="">
              {/* Filter Icon Placeholder */}
              <Image src="/hide.png" alt="Hide Filter" width={24} height={24} />
            </div>
            <div className="flex">
              {/* Sort By Icon Placeholder */}
              <p>Sort by <FaSortDown /> </p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 36 }).map((_, index) => (
            <a 
              key={index} 
              href="/product-details"
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition transform hover:scale-105"
            >
              {/* Placeholder for Product Image */}
              <div className="h-40 w-full bg-gray-200 rounded mb-4">
                <Image src="/Rectanglee.png" alt="Product" width={300} height={200} className="w-full h-full object-cover" />
              </div>

              {/* Just In */}
              <span className="text-sm text-brown-500 font-medium mb-2">Just In</span>

              {/* Product Name */}
              <h1 className="text-lg font-semibold mb-2">Product Name</h1>

              {/* Product Category */}
              <span className="text-sm text-gray-500 mb-2">Men&apos;s Shoes</span> {/* Escaped apostrophe here */}
              
              {/* Color */}
              <span className="text-sm text-gray-600 mb-2">Color: 1</span>

              {/* Price */}
              <span className="text-lg font-bold text-gray-800">$100</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
