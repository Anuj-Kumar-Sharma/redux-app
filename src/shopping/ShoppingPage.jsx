import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

const ShoppingPage = () => {
    return (
        <div className="h-screen flex">
            <div
                id="products"
                className="flex-2 overflow-y-auto p-12 space-y-12"
            >
                <h2 className="text-4xl font-light">Our Products</h2>
                <ProductList />
            </div>
            <div id="cart" className="flex-1 overflow-y-auto space-y-12">
                <h2 className="text-4xl font-light px-6 pt-12">Your Cart</h2>
                <Cart />
            </div>
        </div>
    );
};

export default ShoppingPage;
