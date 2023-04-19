"use client";

export default function HelloCheckbox() {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(`You changed the value of the checkbox to ${event.target.checked}`);
  };
  return (
    <div className="flex items-center">
      <input
        onChange={changeHandler}
        id="checkbox"
        type="checkbox"
        value=""
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-myteal-500 checked:text-myteal-500 focus:ring-2 focus:ring-myteal-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-myteal-300"
      />
      <label htmlFor="checkbox" className="ml-2 text-sm">
        Change me 🤩
      </label>
    </div>
  );
}
