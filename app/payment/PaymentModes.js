// PaymentModes.js
import React, { useEffect } from "react";
import useCartStore from "@/app/cartStore";
import Link from "next/link";
import Image from "next/image";

const PaymentModes = () => {
  const { pay, fetchData, selectedPaymentMode, setSelectedPaymentMode } =
    useCartStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {pay?.map((item) => (
        <div
          key={item}
          className="flex flex-col hover:bg-indigo-200  w-64 md:w-64 items-center justify-around  bg-white border border-gray-300 rounded-xl shadow-md ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          {/* <div className="mb-4 mt-4">{item}</div> */}
          {item === "UPI" ? (
            <Image
              alt="UPI"
              src="/images.png"
              width={100}
              height={100}
              className="rounded-lg mt-10 "
            />
          ) : (
            <Image
              alt="Card"
              src="/card.png"
              width={100}
              height={100}
              className="rounded-lg mt-8  "
            />
          )}
          <Link href="/orderConfirmation">
            <button
              className="w-full p-3 mt-5 mb-3 rounded bg-indigo-500 text-white text-sm font-medium hover:opacity-75"
              onClick={() => setSelectedPaymentMode(item)}
            >
              Make Payment
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PaymentModes;
