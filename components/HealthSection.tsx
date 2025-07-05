import Image from 'next/image';

const HealthSection = () => {
  return (
    <section className=" padding py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-[20rem] md:h-[23rem] lg:h-[27rem]">
            <Image
              src="/images/dog-health.png"
              alt="health-image"
              fill
              className="rounded-xl"
            />
          </div>

          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dary-blue mb-6">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p className="text-sm  text-grey mb-8">
              {`Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat digestive issues. Our specialized blend helps
              94% of our customers have reported significant improvements in
              their dogs' health after incorporating our product into their
              diet.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
