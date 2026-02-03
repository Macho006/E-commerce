// components/shared/Footer.tsx
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 border-t py-10 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <img src="/public/logo 1.png" alt="Behoof Logo" className="w-32 h-16 object-contain" />
          <p>Were on social media</p>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">For Users</h3>
          <ul className="space-y-1">
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">User Support</Link></li>
            <li><Link href="#">FAQ & Guides</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">User Agreement</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Popular Categories</h3>
          <ul className="space-y-1">
            <li><Link href="#">Smartphones</Link></li>
            <li><Link href="#">Tech & Gadgets</Link></li>
            <li><Link href="#">Vintage Items</Link></li>
            <li><Link href="#">Televisions</Link></li>
            <li><Link href="#">Headphones</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Behoof Team</h3>
          <ul className="space-y-1">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500">
        Copyright © 2023 Behoof, Inc. All rights reserved.
      </div>
    </footer>
  );
};