"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between  p-4 bg-blue-200  shadow-sm">
      <div className="flex items-center justify-between w-full">
        <div>
          <img
            src="assets/img/Adroit_logo.png"
            alt="Logo"
            className="w-30 h-20 "
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-800">Frontend Manager</h1>
        </div>
        <div>
          <img
            src="assets/img/Logo_of_Aut.png"
            alt="Logo"
            className="w-20 h-20 "
          />
        </div>
      </div>
    </header>
  );
}
