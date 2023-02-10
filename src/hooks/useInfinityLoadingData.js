
  function useInfinityLoadingData(data, pageSize) {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
      setDataList(data.slice(0, pageSize));
      setHasMore(true);
    }, []);
    useEffect(() => {
      if (loading) {
        if (data.length > pageSize * page) {
          setTimeout(() => {
            setLoading(false);
            setDataList(data.slice(0, pageSize * page));
          }, 1000);
        } else {
          setTimeout(() => {
            setLoading(false);
            setHasMore(false);
          }, 1000);
        }
      }
    }, [loading]);
    function handleLoadMore() {
      setLoading(true);
      setPage(page + 1);
    }
    return {
      dataList,
      loading,
      hasMore,
      handleLoadMore,
    };
  }
