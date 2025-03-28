import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import { Loader2 } from "lucide-react";

const ProductList = () => {
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if (status == "idle" || status == "loading")
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 size={40} className="animate-spin" />
            </div>
        );

    return (
        <div className="flex flex-wrap gap-8 justify-around">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
