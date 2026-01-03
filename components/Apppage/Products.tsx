import ProductsProducts from "@/components/Apppage/Products-plus/ProductsProducts";
import ProductsWeb from "@/components/Apppage/Products-plus/ProductsWeb";
import ProductsApp from "@/components/Apppage/Products-plus/ProductsApp";

export default function Products() {
  return (
    <div className="bg-black flex flex-col">
      {/* title */}
      <div>
        <p className="text-white font-geist font-normal text-[48px] leading-[95%] tracking-[-5%] text-center">
          Why it is special?
        </p>
        <p className="text-gray-500 font-geist font-normal text-[36px] leading-[95%] tracking-[-5%] text-center">
          Control. Monitor. Earn — anywhere.
        </p>
      </div>

      {/* components */}
      <div>
        <ProductsProducts />
        <ProductsApp />
        <ProductsWeb />
      </div>
    </div>
  );
}
