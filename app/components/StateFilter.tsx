export default function StateFilter({states, onChange}: {states: string[], onChange: any}) {
  const unique = new Set(states.sort());
  const options: any = [];
  unique.forEach(state => {
    options.push(<option value={state} key={state}>{state}</option>)
  });
  return (
    <select onChange={onChange} id="states" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
      <option value="">Todos os Estados</option>
      {options}
    </select>
  )
}