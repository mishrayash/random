"use client";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import useCartStore from "./cartStore";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const { calculatedAmount, data, setCalculatedAmount } = useCartStore();
  let sum = 0,
    q = 0;
  let formattedSum;
  // Iterate through data array and accumulate prices
  useEffect(() => {
    // Calculate the amount
    data.forEach((item) => {
      sum += item.price * item.quantity || 0;
      q += item.quantity || 0; // Make sure item.price is defined
    });

    formattedSum = sum.toFixed(2);

    // Store the calculated amount in Zustand
    setCalculatedAmount(formattedSum);
  }, [data]);
  //to calculate the quantity
  data.forEach((item) => {
    q += item.quantity || 0; // Make sure item.price is defined
  });

  // setCalculatedAmount(formattedSum);
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto mt-5 md:mt-0">
            <div className="text-[22px] md:text-[26px] mb-5 font-semibold leading-tight">
              Shopping Cart
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 ">
            <div className="flex-[2]">
              <div className="text-[20px] font-semibold pb-5">Cart Items</div>
              <CartItem />
            </div>

            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>
              <div className="p-5 my-5 rounded-xl  shadow-md hover:shadow-lg ">
                <div className="flex justify-between">
                  <div className=" text-md md:text-md font-medium text-black">
                    Order Amount
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    <span>₹</span>
                    {calculatedAmount}
                  </div>
                </div>
                <div className="text-sm md:text-md py-5 border-t mt-5">
                  <div className="flex justify-between">
                    <div className=" text-md md:text-md font-medium text-black/[0.5]">
                      Total Quantity
                    </div>
                    <div className="text-md md:text-md font-sm text-black/[0.5]">
                      {q} Items
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className=" text-md md:text-sm font-sm text-black/[0.5]">
                      Coupon
                    </div>
                    <div className="text-md md:text-sm font-sm text-pink-800 hover:cursor-pointer hover:opacity-75 ">
                      Apply Coupon
                    </div>
                  </div>
                </div>
                <span className="flex items-center gap-2 justify-center text-sm text-black/[0.5]">
                  Click on CheckOut to proceed...
                </span>
              </div>
              <Link href="/payment">
                <button
                  className="w-52 py-3 rounded-full bg-indigo-600 text-white text-md font-medium transition-transform active:scale-95 mb-3 mx-20 flex items-center gap-2 justify-center
              ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/[0.5] duration-300 "
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          {/* <div className='flex justify-center'>or Continue Shopping....</div> */}

          {/* EMPTY SCREEN */}
          {/* {data.length<1 && (

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
        <Image
          src="/empty_cart.jpg"
          width={300}
          height={300}
          className="w-[300px] md:w-[400px]"
        />
        <span className="text-xl font-bold"> Your cart is Empty</span>
        <span className="text-center mt-4">
          Add some products to your shopping bag and we will show them here!
          <br/>Go ahead and explore more!
        </span>
        <button className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                Continue Shopping
        </button>
      </div>

      ) } */}
        </Wrapper>
      </div>
    </>
  );
};

export default Page;
