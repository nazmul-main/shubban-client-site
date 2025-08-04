const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'lg',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl transition-all duration-300';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  };
  
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card; 