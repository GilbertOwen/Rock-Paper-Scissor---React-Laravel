import useFetch from "../logic/useFetch";

const History = () => {
    const { data, isPending, error } = useFetch('http://127.0.0.1:8000/api/histories');
    return ( 
        <div className="px-5 pt-5 overflow-auto h-[600px]">
            <h1 className="text-3xl mb-3 text-center">History of JanKen</h1>
            <div className="overflow-auto h-[600px]">
            {isPending && 
            <h1 className="text-2xl text-center text-gray-500">Please wait ....</h1>
            }
            {error && 
            <h1 className="text-2xl text-center text-red-500">{error}</h1>
            }
            {data && <table className="border-4 w-full h-full table-auto">
                <thead>
                    <tr>
                        <th className="p-2">No.</th>
                        <th className="p-2">Condition</th>
                        <th className="p-2">User</th>
                        <th className="p-2">Computer</th>
                    </tr>
                </thead>
            <tbody className="text-center border-collapse overflow-scroll border-2">
                { data && data.histories.map((history) =>(
                <tr key={history.id} className={`capitalize font-semibold ${history.condition === 'win' ? 'bg-green-400' : ''} ${history.condition === 'lose' ? 'bg-red-400' : ''} ${history.condition === 'tie' ? 'bg-yellow-400' : ''}`}>
                    <td className=" p-2 ">{history.id}</td>
                    <td className=" p-2 ">{history.condition}</td>
                    <td className=" p-2 ">{history.user_move}</td>
                    <td className=" p-2 ">Paper</td>
                </tr>
                ))}
            {!data && <h1 className="text-2xl text-center text-red-500">{'No Data'}</h1>}
            </tbody>
            </table>}
            </div>
        </div>
     );
}
 
export default History;