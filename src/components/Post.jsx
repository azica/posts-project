import React from 'react';

const Post = ({post, setShowModal, setPostContent}) => {
	const openPostModal = () => {
		setShowModal(true);
		setPostContent(post)
	  };
	return (
		<article className="post__item" onClick={openPostModal}>
			<div className="post__image">
			<img 
				src={post.img} 
				srcSet={`${post.img} 1x, ${post.img_2x} 2x`} />
			</div>
			<div className="post__body">
				<div className="post__tags">
					<span>{post.tags}</span>
				</div>
				<h6 className="post__title">{post.title}</h6>
				<div className="post__actions">
					<span>{post.autor}</span>
					<span>{post.date}</span>
					<span>{post.views} Views</span>
				</div>
				<p className="post__text">{post.text} </p>
			</div>
		</article>
	);
}

export default Post;
