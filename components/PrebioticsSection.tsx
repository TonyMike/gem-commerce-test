import Image from 'next/image';

const PrebioticsSection = () => {
  return (
    <section className="bg-white padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2  md:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dary-blue mb-6">
              Prebiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </h2>
            <p className="text-sm text-grey mb-8">
              Our premium dog food is enriched with prebiotics that work in
              harmony with the gut microbiome, providing the necessary raw
              materials for the growth and maintenance of beneficial bacteria,
              enhancing digestive health.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[20rem] lg:h-[23rem]">
              <Image
                src="/images/biotics.png"
                alt="prebiotic-image"
                fill
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrebioticsSection;
