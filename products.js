import { useEffect, useState, useCallback } from "react"

const Products = () => {
    const [products, setProducts] = useState();
    const [sortingOrder, setSortingOrder] = useState('Asc');
    const [searchQuery, setSearchQuery] = useState('');

    const debounce = (cb, delay) => {
        let timer;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                cb();
            }, delay);
        }
    }

    const fetchProductsData = async () => {
        let data;
        if (searchQuery) {
            data = products.filter((item) => item?.brand?.toLowerCase().includes(searchQuery?.toLowerCase()));
        } else {
            const res = await fetch('https://dummyjson.com/products');
            const response = await res.json();
            data = response.products;
        }
        setProducts(data);
    }

    const handleSort = () => {
        const data = [...products];
        let key = 'title';
        data.sort((a, b) => {
            if (sortingOrder === 'Asc') {
                setSortingOrder('Desc')
                // return b[key] - a[key]
                return a[key].localeCompare(b[key])
            } else {
                setSortingOrder('Asc')
                // return a[key] - b[key]
                return b[key].localeCompare(a[key])
            }
        })
        setProducts(data);
    }

    console.log("searchQuery", searchQuery);

    const debouncedFetchProductsData = 
        debounce(fetchProductsData, 1000)

    useEffect(() => {
        debouncedFetchProductsData(); // Call debounced function instead of fetch directly
    }, [searchQuery]);

    return (
        <>
            <div>Products Table</div>
            <button onClick={handleSort}>{sortingOrder}</button>
            <input placeholder="search product by id" onChange={(e) => setSearchQuery(e?.target?.value)} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => (
                        <tr key={index}>
                            <td>{item?.id || '-'}</td>
                            <td>{item?.price || '-'}</td>
                            <td>{item?.brand || '-'}</td>
                            <td>{item?.rating || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Products;