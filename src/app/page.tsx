"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  const pathname = usePathname();

  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      name: "Lithium & Sodium Batteries",
      descriptions:
        "Reliable energy storage for homes, vehicles, and commercial systems. Built for endurance and sustainability.",
      color: "#C46F24",
      image: "/lithium.png",
      icon: "/icons/battery-charging-black.png",
      active_icon: "/icons/battery-charging-white.png",
      features: [
        " High energy density for longer backup",
        "Fast charging & deep discharge",
        "Compact and lightweight",
        "Long lifecycle with minimal wear",
        "Eco-friendly and recyclable",
        "Perfect for solar and EV systems",
      ],
    },
    {
      name: "EVs",
      descriptions:
        "Drive into the future with our range of efficient, zero-emission electric cars, bikes, and utility vehicles.",
      color: "#007330",
      image: "/ev.png",
      icon: "/icons/car-black.png",
      active_icon: "/icons/car-white.png",
      features: [
        "Zero tailpipe emissions",
        "Low maintenance, no fuel",
        "Fast charging options",
        "Smart digital features",
        "Personal and commercial models",
        "Eligible for incentives (where available)",
      ],
    },
    {
      name: "Inverters",
      descriptions:
        "Intelligent power conversion systems with advanced monitoring, grid-tie capabilities, and seamless energy management for optimal performance.",
      color: "#28A3C9",
      image: "/inverter.png",
      icon: "/icons/lightning-black.png",
      active_icon: "/icons/lightning-white.png",
      features: [
        "Pure sine wave output",
        "Hybrid and grid-tied options",
        "Smart monitoring & remote control",
        "High conversion efficiency",
        "Ranges from 1kVA to 50kVA+",
        "Built-in protections (surge, short circuit)",
      ],
    },
    {
      name: "Solar Panels",
      descriptions:
        "Harvest the sun’s power with top-tier panels for residential, commercial, or off-grid setups.",
      color: "#C46F24",
      image: "/solar.png",
      icon: "/icons/battery-charging-black.png",
      active_icon: "/icons/battery-charging-white.png",
      features: [
        "High-efficiency mono/poly panels",
        "Weatherproof and durable",
        "Scalable from small to large systems",
        "Low degradation, long-term output",
        "Works with most batteries/inverters",
        "25-year performance warranty",
      ],
    },
    {
      name: "Accessories",
      descriptions:
        "We have got the essential components for system integration everything you need to complete your setup.",
      color: "#088686",
      image: "/accessories.png",
      icon: "/icons/lightning-black.png",
      active_icon: "/icons/lightning-white.png",
      features: [
        "Durable, safety-certified components",
        "Compatible with global standards",
        "Supports smooth installations",
        "Boosts overall system performance",
        "Affordable bundles available",
      ],
    },
    {
      name: "Mini Grids",
      descriptions:
        "Custom energy solutions for communities and businesses in need of off-grid or hybrid power.",
      color: "#8B4B33",
      image: "/mini-grid.png",
      icon: "/icons/lightning-black.png",
      active_icon: "/icons/lightning-white.png",
      features: [
        "Solar + battery hybrid setups",
        "24/7 energy delivery",
        "Designed for remote areas or estates",
        "Smart load & energy management",
        "Remote diagnostics and control",
        "Enables equitable energy access",
      ],
    },
  ];

  return (
    <div className=" h-full overflow-auto">
      <div className=" h-screen bg-[url('/bg.png')] bg-cover bg-center flex flex-col">
        <div className="flex px-10 py-5 flex-row justify-between bg-white/10 items-center backdrop-blur-md  border border-white/30 shadow-md">
          <Image src={"/logo.png"} alt="logo" width={152} height={46} />

          <div className="flex flex-row gap-x-8 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-700 hover:text-gray-900 transition-colors ${
                  pathname == link.href ? "font-bold" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div>
            <button className="bg-[#000673] px-8 py-4 font-medium cursor-pointer hover:bg-blue-800 rounded-full text-white">
              Get A Quote
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-black/20 items-end flex-1 px-10 py-5">
          <div className="gap-y-2 flex flex-col px-10">
            <h1 className="text-[60px] font-[800] ">
              Beyond Power. It’s a Movement.
            </h1>
            <p className="font-[300]">
              Get real-time quotes on EVs, Lithium Batteries, Solar Systems,
              Renewable energy accessories, mini-grids, and more— all in one
              powerful platform. Clean energy made simple, accessible, and
              tailored to your needs.
            </p>
            <div>
              <button className="bg-[#000673] border-[4px] border-[#36C9FF3D]/20 px-8 py-4 font-medium cursor-pointer hover:bg-blue-800 rounded-full text-white">
                Get A Quote
              </button>
            </div>
          </div>

          <div className="flex justify-end px-10">
            <Image src={"/powered.png"} alt="hero" width={147} height={181} />
          </div>
        </div>
      </div>
      <div className="bg-[#E1F7F7]">
        <div className="bg-white rounded-t-[50px]">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="border border-[#36C9FF] mb-2 bg-gradient-to-b from-[#36C9FF]/40 p-2 rounded-xl to-[#36C9FF]">
              <h1 className="text-[#000673] font-medium">Our Solutions</h1>
            </div>
            <h1 className="font-bold text-5xl mb-2">Products & Services</h1>
            <p className="max-w-[700px] font-[300] text-center text-[#666666] text-xl">
              Check out our comprehensive suite of smart, clean energy solutions
              designed for homes, businesses, and communities
            </p>

            <div className="flex flex-row space-x-4 mt-5">
              {products.map((prod, idx) => (
                <button
                  key={idx}
                  className={`${
                    selectedProduct == idx ? "bg-black" : "border"
                  } px-5 py-2 rounded-2xl flex items-center justify-center cursor-pointer`}
                  onClick={() => setSelectedProduct(idx)}
                >
                  <img
                    src={selectedProduct == idx ? prod.active_icon : prod.icon}
                    alt={prod.name}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-20 py-10">
            <div>
              <img src={products[selectedProduct].image} />
            </div>

            <div className="space-y-4">
              <div
                className={`bg-[${products[selectedProduct].color}] flex items-center justify-center h-[68px] w-[68px] p-4 rounded-full`}
              >
                <img
                  src={products[selectedProduct].active_icon}
                  alt={products[selectedProduct].name}
                />
              </div>

              <h1 className="text-4xl font-medium">
                {products[selectedProduct].name}
              </h1>
              <h1 className="font-[300] text-xl">
                {products[selectedProduct].descriptions}
              </h1>

              <div>
                <h1 className="text-2xl font-medium">Key Features</h1>

                <ul className="mt-5 space-y-2">
                  {products[selectedProduct].features.map((feat, idx) => (
                    <div key={idx} className="flex space-x-2 items-center">
                      <div className="h-[9px] w-[9px] bg-[#36C9FF] rounded-full"></div>
                      <h1 className="text-[#666666]">{feat}</h1>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-linear bg-gradient-to-b relative py-10 from-[#000673] to-[#0F84AE]">
        <div className="flex flex-col items-center justify-center text-white py-20">
          <h1 className="font-bold text-5xl mb-2">Trusted Brands</h1>
          <p className="max-w-[700px] font-[300] text-center text-xl">
            We collaborate with global and local energy pioneers to bring you
            the most reliable, cutting-edge technologies in electric mobility,
            solar power, and sustainable energy infrastructure.
          </p>
        </div>

        <div className="relative overflow-hidden py-10">
          <Image
            src={"/brands.png"}
            alt="brands"
            width={1000}
            height={200}
            className="mx-auto w-full"
          />
          <img
            src={"/card.png"}
            alt="brands"
            className="mx-auto h-auto  absolute top-0 left-[50%] translate-x-[-50%] opacity-90"
          />
        </div>
      </div>
      <div className="bg-linear bg-gradient-to-b relative py-10 to-[#000673] from-[#000000]">
        <div className="flex flex-col items-center justify-center text-white py-20">
          <div className="border border-[#36C9FF66] mb-2 bg-gradient-to-b from-[#36C9FF66]/40 p-2 rounded-xl to-[#36C9FF66]">
            <h1 className="text-white font-medium">Testimonials</h1>
          </div>
          <h1 className="font-bold text-5xl mb-2">
            Trusted by Many, Loved by More
          </h1>
          <p className="max-w-[700px] font-[300] text-center text-xl text-white/70">
            Our community says it best. See why individuals and businesses
            continue to choose Electric and Energy for their renewable energy
            needs.
          </p>
        </div>

        <div className="relative overflow-hidden py-10">
          <Image
            src={"/testimonial.png"}
            alt="brands"
            width={1000}
            height={100}
            className="mx-auto w-full"
          />
        </div>
      </div>
      <div className="bg-[#000673]">
        <div className="rounded-t-4xl bg-white px-20 py-10">
          <div className="bg-linear bg-gradient-to-t to-[#000673] from-[#000000] rounded-4xl max-w-[900px] mx-auto">
            <div className="flex flex-col items-center justify-center text-white py-20">
              <div className="border border-[#36C9FF] mb-2 bg-gradient-to-b from-[#36C9FF]/40 p-2 rounded-xl to-[#36C9FF]">
                <h1 className="text-white font-medium">Get In Touch </h1>
              </div>
              <h1 className="font-bold text-3xl mb-2">Request a Quote</h1>
              <p className="max-w-[700px] font-[300] text-center text-xl text-white/70">
                Let us match you with the right solution. Get fast, accurate
                quotes on EVs, batteries, solar systems, and more tailored to
                your needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-12 py-5 gap-10">
              <div className="space-y-5 flex flex-col">
                <div className="space-y-2 flex flex-col">
                  <h1 className="text-white/50">Full Name</h1>
                  <input
                    type="text"
                    className="bg-white/5 p-4 placeholder:text-[#91919157] rounded-xl"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <h1 className="text-white/50">Email Address</h1>
                  <input
                    type="text"
                    className="bg-white/5 p-4 placeholder:text-[#91919157] rounded-xl"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 flex flex-col">
                    <h1 className="text-white/50">Email Address</h1>
                    <select className="bg-white/5 p-4 text-[#91919157] rounded-xl">
                      <option value="" className="text-[#91919157]">
                        Select Product
                      </option>
                      {products.map((product, idx) => (
                        <option
                          className="placeholder:text-white"
                          key={idx}
                          value={idx}
                        >
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <h1 className="text-white/50">Email Address</h1>
                    <select className="bg-white/5 p-4 text-[#91919157] rounded-xl">
                      <option value="" className="placeholder:text-white">
                        Select Product
                      </option>
                      {products.map((product, idx) => (
                        <option
                          className="placeholder:text-white"
                          key={idx}
                          value={idx}
                        >
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-5 flex flex-col">
                <div className="space-y-2 flex flex-col">
                  <h1 className="text-white/50">Email Address</h1>
                  <select className="bg-white/5 p-4 text-[#91919157] rounded-xl">
                    <option value="" className="placeholder:text-white">
                      Select Product
                    </option>
                    {products.map((product, idx) => (
                      <option
                        className="placeholder:text-white"
                        key={idx}
                        value={idx}
                      >
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 flex flex-col">
                  <h1 className="text-white/50">Email Address</h1>
                  <textarea
                    name=""
                    className="bg-white/5 rounded-xl"
                    id=""
                    rows={7}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="px-12 py-5">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-400 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  I accept the{" "}
                  <Link href={"/terms"} className="text-[#33CFFF] underline">
                    Terms
                  </Link>
                </span>
              </label>
            </div>

            <div className="py-5 flex items-center justify-center">
              <button
                className="bg-white p-3 rounded-full flex items-center space-x-6 transition-all duration-300 ease-out
               hover:bg-gray-100 hover:shadow-lg hover:translate-x-1 cursor-pointer"
              >
                <span>Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 bg-[#f4f4f4]">
          <div className="flex flex-col items-center justify-center text-black py-20">
            <div className="border border-[#36C9FF66] mb-2 bg-gradient-to-b from-[#36C9FF66]/40 py-2 px-4 rounded-xl to-[#36C9FF66]">
              <h1 className="text-white font-medium">FAQs</h1>
            </div>
            <h1 className="font-bold text-5xl mb-2">
              Got Questions? We’ve Got Answers
            </h1>
            <p className="max-w-[700px] font-[300] text-center text-xl text-[#666666]">
              We know the energy space can feel overwhelming. That’s why we’ve
              compiled answers to the top questions our users ask simple,
              direct, and helpful.
            </p>
          </div>

          {/**FOOTER */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-20">
            <div className="flex flex-col space-y-8 col-span-2">
              <div className="flex flex-col space-y-4">
                <Image src={"/logo.png"} alt="logo" width={152} height={46} />
                <h1 className="text-[#3B3D40] font-light text-sm">
                  Your trusted partner in renewable energy solutions. From
                  electric vehicles to solar installations, we're powering a
                  sustainable future.
                </h1>
              </div>

              <Image src={"/pb.png"} alt="logo" width={400} height={46} />
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="font-semibold">Navigation</h1>
              </div>
              <div>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-[#3B3D40] hover:text-blue-500 transition-colors font-light`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="font-semibold">Navigation</h1>
              </div>
              <div>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-[#3B3D40] hover:text-blue-500 transition-colors font-light`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="font-semibold">Navigation</h1>
              </div>
              <div>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-[#3B3D40] hover:text-blue-500 transition-colors font-light`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
