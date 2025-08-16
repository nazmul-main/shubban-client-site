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
    primary: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-teal-500 hover:to-emerald-500 shadow-lg hover:shadow-xl focus:ring-emerald-500',
    secondary: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-cyan-500 hover:to-teal-500 shadow-lg hover:shadow-xl focus:ring-teal-500',
    outline: 'border-2 border-emerald-500 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white focus:ring-emerald-500',
    white: 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg focus:ring-emerald-500',
    ghost: 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500'
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