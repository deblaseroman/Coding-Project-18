const [chartData, setChartData] = useState(null);

useEffect (() => {
    fetch ('/financial_data.json')
    .then ((response) => response.json())
    .then((data)=> setChartData (data));
}, []);