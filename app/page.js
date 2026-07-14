import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[80%] w-[95%]">
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}
