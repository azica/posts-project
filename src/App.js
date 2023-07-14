
import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import Header from './components/Header';
import { useSearchedPost, useFetchPosts } from "../src/hooks/useFetchedSearchedPosts"

function App() {
	const [query, setQuery] = useState('')
	const {posts, isLoading, isError} = useFetchPosts();
	const searchedPosts = useSearchedPost(query)

  return (
    <div className="wrapper">
		<Header setQuery={setQuery}/>
     	<main>
		 	<PostList searchedPosts={searchedPosts}/>
		</main>
    </div>
  );
}

export default App;
