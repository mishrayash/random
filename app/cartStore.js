// cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  data: [],
  // formattedSum: 0,
  selectedPaymentMode: null,
  calculatedAmount: 0,
  fetchData: async () => {
    try {
      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/order-details"
      );
      const responseData = await response.json();
      const products = responseData?.products || [];
      const paymentMethods = responseData?.paymentMethods || [];
      const sum = products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      set({ data: products, pay: paymentMethods });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  setSelectedPaymentMode: (mode) => set({ selectedPaymentMode: mode }),
  setCalculatedAmount: (amount) => set({ calculatedAmount: amount }),
  removeFromCart: (itemId) => {
    set((state) => ({
      data: state.data.filter((item) => item.id !== itemId),
    }));
  },
}));

export default useCartStore;
