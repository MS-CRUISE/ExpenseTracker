function Cards({title,type,amount}){

const getAmountColor = () => {
    switch(type) {
      case 'income':
        return 'text-green-600';
      case 'expense':
        return 'text-red-600';
      case 'balance':
        // For balance, check if amount is positive or negative
        const numericAmount = parseFloat(amount.replace(/[$,]/g, ''));
        return numericAmount >= 0 ? 'text-green-600' : 'text-red-600';
      default:
        return 'text-gray-800';
    }
  };



    return<><div className="bg-white p-3 rounded-lg shadow w-[260px] h-[120px]">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={`text-2xl font-bold ${getAmountColor()}`}>{amount}</p>
    </div>
    </>

}
export default Cards;