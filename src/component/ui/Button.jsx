import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-color text-white hover:bg-blue-700 shadow-lg hover:shadow-xl focus:ring-primary-color',
    secondary: 'bg-secondary-color text-white hover:bg-pink-600 shadow-lg hover:shadow-xl focus:ring-secondary-color',
    outline: 'border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white focus:ring-primary-color',
    white: 'bg-white text-primary-color hover:bg-gray-100 shadow-lg focus:ring-primary-color',
    ghost: 'text-gray-700 hover:text-primary-color hover:bg-gray-50 focus:ring-primary-color'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 