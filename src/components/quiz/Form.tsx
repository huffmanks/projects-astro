import { categories, difficulties } from "./constants";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

const Form = ({ handleChange, handleSubmit }: Props) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto max-w-xs px-3">
        <div className="mb-4">
          <label
            htmlFor="categories"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Select a category
          </label>
          <select
            id="categories"
            name="category"
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
            {categories.map((category) => (
              <option key={category.label} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="difficulties"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Select the difficulty
          </label>
          <select
            id="difficulties"
            name="difficulty"
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
            {difficulties.map((difficulty) => (
              <option key={difficulty.label} value={difficulty.value}>
                {difficulty.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="numberOfQuestions"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Number of questions
          </label>
          <input
            id="numberOfQuestions"
            name="amount"
            inputMode="numeric"
            type="number"
            defaultValue={10}
            min={1}
            max={50}
            required
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mb-4 w-full rounded-lg bg-purple-700 px-5 py-2.5 font-bold tracking-wider text-white focus:ring-4 focus:outline-none enabled:cursor-pointer enabled:hover:bg-purple-800 enabled:focus:ring-purple-300 disabled:opacity-60 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900">
          BEGIN
        </button>
      </form>
    </>
  );
};

export default Form;
