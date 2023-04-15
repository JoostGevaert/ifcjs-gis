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
        className="w-4 h-4 checked:text-myteal-500 text-myteal-500 bg-gray-100 border-gray-300 rounded focus:ring-myteal-300 dark:focus:ring-myteal-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="checkbox"
        className="ml-2 text-sm"
      >
        Change me 🤩
      </label>
    </div>
  );
}
