import { useEffect, useState } from 'react';
import { omdb } from '../utils';
import SearchCard from '../components/SearchCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '../components/Loader';

const Search = () =>{
    const navigate = useNavigate();
    const [param] = useSearchParams();
    const [list,setList] = useState([])
    const [result,setResult] = useState(0)

    useEffect(_ => {
        if(param.has("q") && param.get("q")!==""){
            setList([]);
        }
    },[param])

    const loadFunc = (pageno) =>{
        (async _ =>{
            const response = await omdb.get(`?s=${param.get("q")}&page=${pageno}`)
            if(response.data.Response === 'False'){
                navigate('/404');
            }
            setList((originalList) =>{
                return [...originalList, ...response.data.Search];
            });
            setResult(response.data.totalResults)
        })();
    }

    return(
        <Box p={5}>
            <Typography>About {result} Results</Typography>
            <InfiniteScroll
            pageStart={1}
            loadMore={loadFunc}
            hasMore={result === 0 || list.length<result}
            loader={<Loader/>}
            >
            <Stack spacing={4} mt={2}>
                {list.map((e, idx) => {
                    return <SearchCard data={e} key={idx}/>
                })}
            </Stack>
            </InfiniteScroll>
        </Box>
    )
}
export default Search;