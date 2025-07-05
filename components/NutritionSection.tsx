import Image from 'next/image';
import Button from './Button';

const NutritionSection = () => {
  return (
    <section className="bg-secondary padding py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dary-blue mb-6">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="text-sm  text-grey mb-8">
              {`    Invest in your dog's future with our scientifically formulated
              superfood blend. Our premium nutrition helps dogs live longer,
              healthier lives by providing them three vital vitality, energy,
              and the joy of a longer, healthier life.`}
            </p>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-dary-blue">Key Points:</h3>
              <div className="space-y-1 mb-8">
                <div className="flex py-3 border-b border-gray-200  items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-primary mr-4 sm:mr-8">
                    97%
                  </span>
                  <p className="text-sm  text-grey">
                    Dogs showed that dog food was leading brands because of its
                    real functional ingredients and delicious flavor.
                  </p>
                </div>
                <div className="flex py-3 border-b border-gray-200  items-center">
                  <span className="text-3xl sm:text-4xl  font-bold text-primary mr-4 sm:mr-8">
                    84%
                  </span>
                  <p className="text-sm text-grey">
                    Our dog food provides superior nutrition and a potential
                    probiotic for optimal nutrient absorption.
                  </p>
                </div>
                <div className="flex py-3 items-center">
                  <span className="text-3xl sm:text-4xl  font-bold text-primary mr-4 sm:mr-8">
                    92%
                  </span>
                  <p className="text-sm  text-grey">
                    Our dog food is nutritionally complete and contributes to
                    their ideal quality.
                  </p>
                </div>
              </div>
            </div>

            <Button
              title={`Give your furry friend the gift of wholesome nutrition`}
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[36rem] rounded-xl ">
              <Image
                src={'/images/dog-nutrition.png'}
                alt="Dog with food"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
