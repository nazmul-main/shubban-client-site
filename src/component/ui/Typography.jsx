const Typography = {
  h1: ({ children, className = '', ...props }) => (
    <h1 
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 ${className}`} 
      {...props}
    >
      {children}
    </h1>
  ),
  
  h2: ({ children, className = '', ...props }) => (
    <h2 
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 ${className}`} 
      {...props}
    >
      {children}
    </h2>
  ),
  
  h3: ({ children, className = '', ...props }) => (
    <h3 
      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-900 ${className}`} 
      {...props}
    >
      {children}
    </h3>
  ),
  
  h4: ({ children, className = '', ...props }) => (
    <h4 
      className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-gray-900 ${className}`} 
      {...props}
    >
      {children}
    </h4>
  ),
  
  p: ({ children, className = '', size = 'md', ...props }) => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base sm:text-lg',
      lg: 'text-lg sm:text-xl',
      xl: 'text-xl sm:text-2xl'
    };
    
    return (
      <p 
        className={`${sizeClasses[size]} text-gray-600 leading-relaxed ${className}`} 
        {...props}
      >
        {children}
      </p>
    );
  },
  
  span: ({ children, className = '', ...props }) => (
    <span className={`text-base text-gray-600 ${className}`} {...props}>
      {children}
    </span>
  )
};

export default Typography; 