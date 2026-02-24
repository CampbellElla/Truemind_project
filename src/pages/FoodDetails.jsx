import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../ui/Navbar.jsx";
import Footer from "../ui/Footer.jsx";
import { useCart } from "../context/CartContext.jsx";

const mockFoods = [
  {
    id: 1,
    name: "Jollof Rice with Grilled Chicken",
    description:
      "Aromatic rice cooked in tomato sauce with perfectly grilled chicken",
    price: "₦2,500",
    image: "/food11.png",
    proteins: [
      { id: "pc", label: "Fried Chicken", price: 0 },
      { id: "gr", label: "Grilled Chicken", price: 200 },
      { id: "bf", label: "Beef", price: 300 },
    ],
    sides: [
      { id: "pl", label: "Plantain", price: 200 },
      { id: "sl", label: "Small Salad", price: 150 },
    ],
  },
];

const FoodDetails = () => {
  const { id } = useParams();
  const foodId = parseInt(id, 10);
  const food = mockFoods.find((f) => f.id === foodId) || mockFoods[0];

  const [selectedProtein, setSelectedProtein] = useState(food.proteins[0].id);
  const [selectedSides, setSelectedSides] = useState([]);
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);

  const toggleSide = (sideId) => {
    setSelectedSides((prev) =>
      prev.includes(sideId)
        ? prev.filter((s) => s !== sideId)
        : [...prev, sideId],
    );
  };

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  const { addItem } = useCart();

  const parsePrice = (priceStr) =>
    parseInt((priceStr || "").replace(/[^0-9]/g, ""), 10) || 0;

  const handleAddToCart = () => {
    const base = parsePrice(food.price);
    const protein = food.proteins.find((p) => p.id === selectedProtein) || {
      price: 0,
      label: "",
    };
    const sidesSelected = food.sides.filter((s) =>
      selectedSides.includes(s.id),
    );
    const sidesTotal = sidesSelected.reduce((s, it) => s + it.price, 0);

    const unitPrice = base + (protein.price || 0) + sidesTotal;

    const options = {
      protein: protein.label,
      sides: sidesSelected.map((s) => s.label),
      summary: `${protein.label}${sidesSelected.length ? ` · ${sidesSelected.map((s) => s.label).join(", ")}` : ""}`,
      notes,
    };

    addItem({
      id: food.id,
      name: food.name,
      image: food.image,
      description: food.description,
      unitPrice,
      qty: quantity,
      options,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image */}
          <div>
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{food.name}</h1>
            <div className="text-lg font-bold text-orange-500">
              {food.price}
            </div>
            <p className="text-sm text-gray-700">{food.description}</p>

            {/* Tags */}
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                Highly rated
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                View Reviews
              </span>
            </div>

            {/* Protein Options */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold mb-3">Choose Your Protein</h3>
              <div className="space-y-2">
                {food.proteins.map((p) => (
                  <label
                    key={p.id}
                    className="flex items-center justify-between border border-gray-200 rounded px-3 py-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="protein"
                        value={p.id}
                        checked={selectedProtein === p.id}
                        onChange={() => setSelectedProtein(p.id)}
                      />
                      <span className="font-medium">{p.label}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {p.price > 0 ? `+₦${p.price}` : null}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Extra Sides */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold mb-3">Extra Sides (Optional)</h3>
              <div className="space-y-2">
                {food.sides.map((s) => (
                  <label
                    key={s.id}
                    className="flex items-center justify-between border border-gray-200 rounded px-3 py-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        value={s.id}
                        checked={selectedSides.includes(s.id)}
                        onChange={() => toggleSide(s.id)}
                      />
                      <span>{s.label}</span>
                    </div>
                    <div className="text-sm text-gray-600">+₦{s.price}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <h3 className="font-semibold mb-2">Special Instructions</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-200 rounded p-3 text-sm"
                rows={4}
                placeholder="Add any special requests (optional)"
              />
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                <button onClick={decrease} className="px-3 py-2">
                  -
                </button>
                <div className="px-4 py-2">{quantity}</div>
                <button onClick={increase} className="px-3 py-2">
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FoodDetails;
