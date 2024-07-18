import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (e) => {
    setCount((prev) => {
      if (type === "minus") {
        return prev > 0 ? prev - 1 : 0;
      } else {
        return prev < 5 ? prev + 1 : 5;
      }
    });
    e.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
