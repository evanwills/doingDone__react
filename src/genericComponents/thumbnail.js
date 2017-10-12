import React from 'react';
import ReactDOM from 'react-dom';


export const thumbnail = (img) => {
	return `<img src="{img.url}" alt="img.alt" class="thumbnail {img.class}" />`;
}