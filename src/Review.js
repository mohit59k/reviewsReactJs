import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
	const len = people.length - 1
	const prevBtn = document.querySelector('.prev-btn')
	const nextBtn = document.querySelector('.next-btn')

	const [index, setIndex] = useState(0)
	const { id, name, job, image, text } = people[index]
	function nextPerson() {
		return setIndex((prevIndex) => {
			return prevIndex + 1
		})
	}
	function prevPerson() {
		return setIndex((prevIndex) => {
			return prevIndex - 1
		})
	}
	function randomPerson() {
		const randomLen = Math.round(Math.random() * len)
		return setIndex((randomIndex) => {
			return randomLen
		})
	}
	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt='' className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson} disabled={index <= 0}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson} disabled={index >= 3}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				Surprise Me
			</button>
		</article>
	)
}

export default Review
