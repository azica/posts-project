import React, {useState} from 'react';
import Post from './Post';
import Modal from './Modal';

const PostList = ({searchedPosts}) => {
	const [postContent, setPostContent] = useState({})
	const [showModal, setShowModal] = useState(false);

	
	return (
		<div className="container">
			<div className='post__list'>
				{searchedPosts?.map((post,index)=><Post 
				setPostContent={setPostContent}
				setShowModal={setShowModal}
				key={index} 
				post={post}/>)}
			</div>
			<Modal setShowModal={setShowModal} showModal={showModal}>
				<div className="post__content">
					<h3>{postContent.title}</h3>
					<p>{postContent.text}</p>
				</div>
			</Modal>
		</div>
	)
}

export default PostList;

