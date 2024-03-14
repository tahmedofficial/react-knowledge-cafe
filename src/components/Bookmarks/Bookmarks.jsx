import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className='md:w-1/3 mt-20 md:ml-10'>
            <h2 className='text-3xl text-center mt-6'>Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;