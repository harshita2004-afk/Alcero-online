import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
  if (!form.name || !form.phone || !form.address) {
    alert("Please fill all fields.");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Save order
  const { data: order, error } = await supabase
    .from("orders")
    .insert([
      {
        customer_name: form.name,
        phone: form.phone,
        address: form.address,
        email: form.email,
        total,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error(error);
    alert("Order failed.");
    return;
  }

  // Save each product
  const orderItems = cart.map((item) => ({
    order_id: order.id,
    product_name: item.name,
    color: item.selectedColor,
    quantity: item.quantity,
    price: item.price,
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) {
    console.error(itemsError);
    alert("Couldn't save order items.");
    return;
  }

  alert("Order placed successfully!");
  clearCart();

  navigate("/");
};

  return (
    <div className="max-w-xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-display mb-8">
        Checkout
      </h1>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 h-32"
        />

       <button
  onClick={handleSubmit}
  className="w-full bg-charcoal text-white rounded-xl py-3"
>
  Place Order
</button>
      </div>
    </div>
  );
}