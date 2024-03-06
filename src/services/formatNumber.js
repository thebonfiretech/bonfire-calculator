const formatNumber = (number) => {
    if (isNaN(number)) return 
  
    const formatedNumber = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  
    return formatedNumber;
  };
  
  export default formatNumber;
  