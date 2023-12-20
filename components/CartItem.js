"use client";
// CartItem.js
import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCartStore from "@/app/cartStore";
import Image from "next/image";

const CartItem = () => {
  const { data, fetchData, removeFromCart } = useCartStore();

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = (itemId) => {
    // Call your state management function to remove the item from the cart
    removeFromCart(itemId);
  };
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className=" text-sm h-[auto] flex sm:flex-shrink py-5 gap-3 md:gap-5 border-b  mb-3 rounded-xl shadow-md hover:shadow-lg  "
        >
          {/* Image */}
          <div className=" text-sm aspect-square w-[auto] md:w-[120px]">
            {/* <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> */}
            {item.image && (
              <Image
                className="m-1 p-2"
                src={item.image}
                width="50"
                height="50"
                layout="responsive"
              />
            )}
          </div>

          <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between m-1 px-7">
              <div className="text-sm font-semibold md:text-1xl  text-black/[0.8] sm:overflow-clip">
                {item.title}
              </div>

              <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                Quantity: {item.quantity}
              </div>
              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2 flex flex-row justify-between ">
                <div>
                  <span>₹</span>
                  {item.price * item.quantity}
                </div>

                <RiDeleteBin6Line
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px] md:hidden"
                />
              </div>
            </div>

            {/* <div className="text-md font-medium text-black/[0.5] hidden md:block">
               Quantity - {item.quantity}
            </div> */}
            <div className=" flex justify-between mt-2 px-7 ">
              <div className="text-md font-medium text-black/[0.5] px-1 hidden md:block">
                Quantity: {item.quantity}
              </div>

              <RiDeleteBin6Line
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:visible md:text-[20px] invisible"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
