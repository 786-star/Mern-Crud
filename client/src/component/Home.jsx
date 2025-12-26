import { useEffect, useState } from 'react';
import Input from './InputField'
import Table from './Table';
import { bookBaseUrl } from '../api/apiInstance';

const columns = [
    {
        header: "Book Name",
        accessor: "bookName",
    },
    {
        header: "Book Title",
        accessor: "bookTitle",
    },
    {
        header: "Author",
        accessor: "author",
    },
    {
        header: "Selling Price",
        accessor: "sellingPrice",
    },
    {
        header: "Publish Date",
        accessor: "publishDate",
    },

    {
        header: "Action",
        render: (row) => (
            <button className="text-indigo-600 hover:underline">
                Edit
            </button>
        ),
    },
];

const Home = () => {
    const [bookForm, setBookForm] = useState(
        {
            bookName: "",
            bookTitle: "",
            author: "",
            sellingPrice: "",
            publishDate: ""
        }
    )
    const [bookLists, setBookLists] = useState([])

    const getAllBooks = async () => {
        try {
            const data = await bookBaseUrl.get('/book/get')
            setBookLists(data?.data?.book)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBooks()
    }, [])
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setBookForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        try {
            const data = await bookBaseUrl.post('/book/add', bookForm)
            setBookForm({
                bookName: "",
                bookTitle: "",
                author: "",
                sellingPrice: "",
                publishDate: ""
            })

            getAllBooks();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="w-full px-10 pt-24 min-h-screen">
            <div className='w-full grid grid-cols-5 gap-3 my-4'>
                <div className='w-full flex flex-col gap-2'>
                    <Input label="Book Name" placeholder="Book Name" value={bookForm.bookName} onChange={handleFormChange} name="bookName" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input label="Book Title" placeholder="Book Title" value={bookForm.bookTitle} name="bookTitle" onChange={handleFormChange} />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input label="Author" placeholder="Author" value={bookForm.author} name="author" onChange={handleFormChange} />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input type='number' label="Selling Price" placeholder="Selling Price" value={bookForm.sellingPrice} name="sellingPrice" onChange={handleFormChange} />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input type='date' label="Publish Date" placeholder="Publish Date" value={bookForm.publishDate} name="publishDate" onChange={handleFormChange} />
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-gray-700 text-white h-9 w-22 rounded-md cursor-pointer' onClick={handleSubmit}>Submit</button>
            </div>

            <Table columns={columns}
                data={bookLists}
            />
        </div>
    )
}

export default Home