import Input from './InputField'
import Table from './Table';

const Home = () => {
    const columns = [
        {
            header: "Book Name",
            accessor: "name",
        },
        {
            header: "Book Title",
            accessor: "author",
        },
                {
            header: "Author",
            accessor: "name",
        },
        {
            header: "Selling Price",
            accessor: "author",
        },
                {
            header: "Publish Date",
            accessor: "name",
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
    const data = [
        { name: "Clean Code", author: "Robert C. Martin" },
        { name: "You Don’t Know JS", author: "Kyle Simpson" },
    ];
    return (
        <div className="w-full px-10 pt-24 min-h-screen">
            <div className='w-full grid grid-cols-5 gap-3 my-4'>
                <div className='w-full flex flex-col gap-2'>
                    <Input label="Book Name" placeholder="Book Name"
                    // value={bookName}
                    // onChange={(e) => setBookName(e.target.value)}
                    // name="bookName"
                    />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input label="Book Title" placeholder="Book Title" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input label="Author" placeholder="Author" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input type='number' label="Selling Price" placeholder="Selling Price" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Input type='date' label="Publish Date" placeholder="Publish Date" />
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-gray-700 text-white h-9 w-22 rounded-md cursor-pointer'>Submit</button>
            </div>

           <Table columns={columns} data={data}/>
        </div>
    )
}

export default Home
