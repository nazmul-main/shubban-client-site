const Container = ({ 
  children, 
  className = '', 
  size = 'lg',
  padding = true,
  ...props 
}) => {
  const baseClasses = 'mx-auto';
  
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  const paddingClasses = padding ? 'px-2 sm:px-4 lg:px-6' : '';
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${paddingClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container; 