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
  
  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${paddingClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container; 