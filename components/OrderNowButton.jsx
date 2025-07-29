"use client";
export default function OrderNowButton() {
  const handleClick = () => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-orange-500 text-white font-bold py-3 px-12 mt-3 rounded-md hover:bg-red-600 transition-all"
    >
      এখনি অর্ডার করুন
    </button>
  );
}
