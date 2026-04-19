// Reusable button component

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as = 'button',
  to,
  disabled = false,
  ...rest
}) => {
  const baseStyles =
    'rounded-lg cursor-pointer inline-flex items-center justify-center transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-400',
    secondary: 'bg-white ring-2 ring-blue-500 ring-inset text-blue-500 hover:bg-blue-50',
    icon: 'hover:opacity-85',
    textOnly: 'text-blue-500 hover:text-blue-600 hover:bg-gray-100',
  };

  const getSizes = (variant, size) => {
    if (variant === 'icon') {
      const iconSizes = { sm: 'p-2', md: 'p-3', lg: 'p-4' };
      return iconSizes[size];
    }

    if (variant === 'textOnly') {
      const textSizes = {
        sm: 'px-3 py-2 text-sm min-w-20',
        md: 'px-4 py-2.5 text-base min-w-24',
        lg: 'px-6 py-3 text-lg min-w-28',
      };
      return textSizes[size];
    }

    const standardSizes = {
      sm: 'px-4 py-2.5 text-sm min-w-28',
      md: 'px-6 py-3 text-base min-w-40',
      lg: 'px-8 py-4 text-lg min-w-48',
    };

    return standardSizes[size];
  };

  const sizeStyle = getSizes(variant, size);
  const baseClasses = `${baseStyles} ${variants[variant]} ${sizeStyle} ${className}`;

  if (as === 'button') {
    return (
      <button className={baseClasses} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }

  return null;
};

export default Button;
