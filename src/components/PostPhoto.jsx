import React from 'react';
import Switcher from './Switcher';

const PostPhoto = (props) => {
    return (
        <div className='photo'>
            <Switcher changeTheme={props.changeTheme} />
        </div>
    );
};

export default PostPhoto;