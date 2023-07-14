
import { useState, useEffect } from 'react';
import {useMemo} from 'react';
import axios from 'axios';

export const useSearchedPost = (query) => {
	const {posts} = useFetchPosts();
	const searchedPosts = useMemo(()=>{
		const excludeColumns = [];

		if(query) {
			const filteredData = posts.filter(item => {
				return Object.keys(item).some(key =>
				  excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(query)
				);
			  });
			  
			return filteredData
		} else {
			return posts
		}
	}, [posts, query])
	
	return searchedPosts
}
export const useFetchPosts = () => {

	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
  	const [isError, setIsError] = useState(false);

	  useEffect(() => {
		const fetchData = async () => {
		  setIsError(false);
		  setIsLoading(true);
		  try {
			let res = await axios({
				method: 'post',
				url: 'https://cloud.codesupply.co/endpoint/react/data.json',
			  });
			  setPosts(res.data);
		  } catch (error) {
			setIsError(true);
		  }
		  setIsLoading(false);
		};
	
		fetchData();
	  }, []);
	  
	return {posts, isLoading, isError};
}

