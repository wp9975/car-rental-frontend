export const LoadingCard = () => {
    return (
        <div className="md:m-2 w-full shadow-lg flex justify-center items-center rounded-lg">
            <div className="w-full h-80 md:h-60 inset-0 bg-grayLavender animate-pulse flex items-center justify-center text-3xl rounded-lg text-white ">Loading</div>
        </div>
    );
}

export const Loading = () => {
    const numOfElements = 10;
    const loadingCards = Array.from({ length: numOfElements }, (_, index) => <LoadingCard key={index} />);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[2000px] gap-4 mx-auto mt-8">
        {loadingCards}
        </div>
    );
}