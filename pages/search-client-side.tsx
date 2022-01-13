import React, { useEffect, useState } from 'react';

export default function SearchClientSide() {
  const [searchResults, setSearchResults] = useState<object[]>([])
  const [searchInput, setSearchInput] = useState<string>('')

  /**
   * client side data rendering
   */
  useEffect(() => {
    fetch('https://hatsa.com/api/search/public/afiproducts/search')
      .then((res) => res.json())
      .then(({data}) => {
        setSearchResults(data)
      })
  }, [])

  const fetchResultData = async () => {
    const query = searchInput;
    const res = await fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`);
    const { data } = await res.json()

    return setSearchResults(data);
  };

  const handleClick = () => {
    event.preventDefault();
    // get data from API
    fetchResultData();
  };

  return (
    <div className="p-4 mx-20">
      <div className="grid grid-cols-6 gap-3 my-5">
        <div className="sm:col-span-5">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="block w-full px-3 py-2 border border-blue-500 placeholder-gray-500 text-gray-900 rounded-lg focus:ring-indigo-500 sm:text-sm"
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>
        <div className="sm:col-span-1">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleClick}
          >
            Search Product
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Id
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {searchResults.map(({ id, product }) => (
          <tr key={id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.title}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
