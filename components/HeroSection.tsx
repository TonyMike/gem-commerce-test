import Image from 'next/image';
import Button from './Button';
import FeatureBox from './FeatureBox';
import ApplePayIcon from './icons/apple-pay.icon';
import GooglePayIcon from './icons/google-pay.icon';
import GuardIcon from './icons/guard.icon';
import IngredientIcon from './icons/ingredient.icon';
import MadeFreshIcon from './icons/made-fresh.icon';
import MasterCardIcon from './icons/mastercard.icon';
import PayPalIcon from './icons/paypal.icon';
import RealFoodIcon from './icons/real-food.icon';
import VetIcon from './icons/vet.icon';
import VisaIcon from './icons/visa.icon';

const HeroSection = () => {
  return (
    <section className="py-8 padding ">
      <div className="max-w-7xl space-y-10 mx-auto">
        <div className="text-center mb-8 lg:mb-12 max-w-sm mx-auto">
          <h1 className="text-2xl sm:text-3xl  font-bold text-dary-blue mb-4">
            What makes us different makes them stronger
          </h1>
        </div>

        <div className="flex items-center flex-col gap-y-10 sm:flex-row gap-x-10 justify-between">
          <div className="space-y-10 lg:space-y-16">
            <FeatureBox
              icon={<RealFoodIcon />}
              title="Real Food"
              description="Wholesome recipes for dogs with real meat and veggies"
            />

            {/* Made Fresh */}
            <FeatureBox
              icon={<MadeFreshIcon />}
              title="Made Fresh"
              description="We prioritize maintaining the integrity of nutrients found in our food"
            />
          </div>

          <div className="relative w-48 h-48 sm:w-64 rounded-full hidden lg:block sm:h-64 lg:w-80 lg:h-80">
            <Image
              fill
              src="/images/food.png"
              alt="Premium Dog Food"
              className="rounded-full object-cover"
            />
          </div>

          <div className="space-y-10 lg:space-y-16">
            {/* Premium Ingredient */}
            <FeatureBox
              icon={<IngredientIcon />}
              title="Premium Ingredient"
              description="Premium pet care with professional safety and quality"
            />

            {/* Vet Developed */}
            <FeatureBox
              icon={<VetIcon />}
              title="Vet Developed"
              description="Premium pet care with professional safety and quality"
            />
          </div>
        </div>

        {/* CTA Button */}

        <div className="text-center ">
          <Button title="Get your dog's healthy meal today!" lg />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 gap-x-6 mt-6 lg:mt-8">
            <div className="flex items-center gap-2">
              <GuardIcon />
              <span className="text-xs sm:text-sm text-grey">
                30-day money back guarantee
              </span>
            </div>
            <div className="flex items-center gap-3">
              <PayPalIcon />
              <VisaIcon />
              <MasterCardIcon />
              <ApplePayIcon />
              <GooglePayIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
