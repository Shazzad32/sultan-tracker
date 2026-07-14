"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Sultan
              <span className="text-orange-500"> Tracker</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              বাংলাদেশের অন্যতম বিশ্বস্ত GPS Vehicle Tracking Service। আপনার
              গাড়ির নিরাপত্তা নিশ্চিত করতে রিয়েল-টাইম ট্র্যাকিং, Engine
              Control, Geo Fence, Mileage Report এবং ২৪/৭ সাপোর্ট।
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.facebook.com/sultanvts"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-orange-500 duration-300 flex items-center justify-center"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.sultantracker.com/"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-orange-500 duration-300 flex items-center justify-center"
              >
                <Globe size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/">About Us</Link>
              </li>

              <li>
                <Link href="/">Services</Link>
              </li>

              <li>
                <Link href="/">Dealer</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Live GPS Tracking</li>

              <li>Engine On/Off</li>

              <li>Geo Fence Alert</li>

              <li>Mileage Report</li>

              <li>Overspeed Alert</li>

              <li>Fleet Management</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-semibold text-xl mb-5">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <Phone size={18} className="text-orange-500 mt-1" />
                <span>01409-962093</span>
                <Phone size={18} className="text-orange-500 mt-1" />
                <span>01409-962099</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-orange-500 mt-1" />
                <span>sultantracker.vts@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sultan Tracker. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
