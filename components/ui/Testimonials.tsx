import Image from "next/image";
import React from "react";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];
function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row md:gap-4 ">
      <div className="flex items-center justify-between ">
        {people.map((person) => (
          <Image
            key={person.id}
            alt="person image"
            height={200}
            width={200}
            className="-mx-2 h-10 w-10 rounded-full border-4 border-white object-cover md:h-12 md:w-12 lg:-mx-3 lg:h-14 lg:w-14"
            src={person.image}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-2 sm:items-start">
        <div className="flex items-start">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="text-yellow-500">
              <Image
                alt="star icon"
                src="/star.svg"
                width={25}
                height={25}
              ></Image>
            </span>
          ))}
        </div>
        <p>انضم لأكثر من 2000 متعلم</p>
      </div>
    </div>
  );
}

export default Testimonials;
