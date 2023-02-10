export const LoadingCard = () => {
    return (
        <div className="md:m-2 w-full shadow-lg flex justify-center items-center rounded-lg">
            <div className="w-full h-80 md:h-60 inset-0 bg-grayLavender animate-pulse flex items-center justify-center text-3xl rounded-lg text-white ">Loading</div>
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6,7,8,9,10];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[2000px] gap-4 mx-auto mt-8">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}