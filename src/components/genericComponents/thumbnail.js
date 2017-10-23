import React from 'react';
import ReactDOM from 'react-dom';


const Thumbnail = (img) => {
	return `<img src="{img.url}" alt="img.alt" class="thumbnail {img.class}" />`;
}

export default Thumbnail;