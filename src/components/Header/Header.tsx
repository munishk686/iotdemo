"use client";

export default function Header() {
  return (
    <header className="bg-blue-200 shadow-sm p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left logo */}
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <img
            src="/assets/img/Adroit_logo.png"
            alt="Adroit Logo"
            className="w-28 h-16 object-contain"
          />
        </div>

        {/* Title */}
        <div className="flex justify-center w-full sm:w-auto">
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-800 text-center sm:text-left">
            Frontend Manager
          </h1>
        </div>

        {/* Right logo */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <img
            src="/assets/img/Logo_of_Aut.png"
            alt="AUT Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </header>
  );
}
