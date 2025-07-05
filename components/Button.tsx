const Button = ({ title, lg }: { title: string; lg?: boolean }) => {
  return (
    <button
      className={`
      bg-primary
      hover:bg-primary/90
      text-white
      font-semibold
      py-3
      text-xs md:text-sm
      w-full md:w-auto
      px-4
      md:px-8
      lg:px-16
      ${lg ? 'xl:px-40' : ''}
      rounded-md
      transition-all
      duration-200
      shadow-sm
      hover:shadow-md
    `}
    >
      {title}
    </button>
  );
};

export default Button;
