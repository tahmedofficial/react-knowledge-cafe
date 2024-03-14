import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover_img, reading_time, author_img, author, posted_date, hashtags, } = blog;
    return (
        <div className='mt-20'>
            <img className='rounded-xl w-full' src={cover_img} alt="" />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mt-3'>{title}</h2>
            <p className='my-2'>
                {
                    hashtags.map((hashtag, index) => <span key={index} className='ml-2'><a href="">#{hashtag}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 underline font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;