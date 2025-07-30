import ProductCard from "./ProductCard";
import img_1 from "../images/qs_non_voice-removebg-preview.png";
import img_2 from "../images/qs_voice-removebg-preview.png";

const ProductShowcase = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 ">
      <ProductCard
        image={img_1}
        name="Non Voice"
        price_1={"৪০০০"}
        price_2={"৩৫০০"}
        price_3={"৩০০"}
      />
      <ProductCard
        image={img_2}
        name="Voice"
        price_1={"৪৫০০"}
        price_2={"৪০০০"}
        price_3={"৩৫০"}
      />
    </div>
  );
};

export default ProductShowcase;
