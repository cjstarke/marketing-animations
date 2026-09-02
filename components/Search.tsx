import { twMerge } from 'tailwind-merge'
import { SearchList } from './SearchList'
import InsightsItems from '../data/insightsItems.json'
import PlaceholderItems from '../data/placeholderItems.json'
import WorkMockItems from '../data/WorkMockItems.json'
import { useState } from 'react'
import { Observer } from '@converge/ui'

export type SearchProps = {
  id?: string
  title?: string
  pageName?: string
  searchClassName?: string
}

export const Search = ({ id, title, pageName, searchClassName}: SearchProps) => {
  const searchClasses = twMerge('flex w-full max-w-screen-lg flex-col items-center px-4 md:flex-row md:justify-start lg:px-0', searchClassName)
  const [searchField, setSearchField] = useState('')
  let pageItems = null

  const pagePath = pageName
  switch (pagePath) {
    case 'insights':
      pageItems = InsightsItems
      break
    case 'work':
      pageItems = WorkMockItems
      break
    default:
      pageItems = PlaceholderItems
      break
  }

  const filteredResults = pageItems.filter((article) => {
    return (
      article.description.toLowerCase().includes(searchField.toLowerCase()) ||
      article.title.toLowerCase().includes(searchField.toLowerCase()) ||
      article.hashtags.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = (e: any) => {
    setSearchField(e.target.value)
  }

  return (
    <div
      id={id}
      title={title}
      data-component-vis="true"
      data-component-type="search"
      className="flex w-full flex-col items-center lg:px-8"
    >
      <Observer className={searchClasses}>
        <input
          className={`focus:outline-lightOrange bg-search w-full rounded-lg border-2 border-solid border-gray-300 p-2 text-2xl text-black md:mr-20 md:w-80 ${
            searchField === '' ? '' : 'full'
          }`}
          placeholder=""
          onChange={handleChange}
          value={searchField}
        />
        <div className="flex w-full max-w-sm justify-between py-6">
          <button
            className="text-md font-bold hover:text-blue-500 active:text-blue-500"
            onClick={handleChange}
            value=""
          >
            all
          </button>
          <button
            className="text-md font-bold hover:text-blue-500 active:text-blue-500"
            onClick={handleChange}
            value="brand"
          >
            &#35;brand
          </button>
          <button
            className="text-md font-bold hover:text-blue-500 active:text-blue-500"
            onClick={handleChange}
            value="innovation"
          >
            &#35;innovation
          </button>
          <button
            className="text-md font-bold hover:text-blue-500 active:text-blue-500"
            onClick={handleChange}
            value="performance"
          >
            &#35;performance
          </button>
        </div>
      </Observer>
      <SearchList results={filteredResults} />
    </div>
  )
}
