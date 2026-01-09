import { useId } from 'react';

const InputBox = ({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency, amountDisable = false }) => {
  const amountInputId = useId();

  return (
    <div className="w-full mb-1">
      <div className="relative w-full p-2 bg-white/20 rounded-md shadow-md">
        <label htmlFor={amountInputId} className="block text-sm font-medium text-gray-100 mb-2">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="w-full bg-transparent border-none outline-none text-lg text-white placeholder:text-gray-200"
          placeholder="0"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value) || 0)}
          disabled={amountDisable}
        />
        <select
          className="absolute right-2 top-9 bg-white/30 border border-white rounded-md px-2 py-1 text-sm text-white focus:outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { InputBox };
