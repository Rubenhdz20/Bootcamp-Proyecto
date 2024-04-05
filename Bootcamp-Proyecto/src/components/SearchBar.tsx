import { useState, forwardRef, useImperativeHandle } from "react";

const SearchBar = forwardRef(({onSearch}, ref) => {
    const [search, setSearch] = useState<string>('')

    useImperativeHandle(ref,()=>({
        search,
        onSearch
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        //console.log(e.target.value)
        setSearch(e.target.value)
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key === "Enter"){
            //console.log('Iniciando búsqueda');
            onSearch(search)
        }
    }

    return (
        <div ref={ref} className="flex flex-row flex-nowrap place-content-around mb-6 p-4 gap-4">
            <h2 className="text-3xl font-bold">Recipee Search</h2>
            <input type="text"
            placeholder="Find a recipee"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            className="bg-gray-200 
            text-gray-600 
            placeholder:text-gray-400 
            p-2 rounded-lg mb-4"/>
        </div>
    )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar;