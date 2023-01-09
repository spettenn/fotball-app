import React from 'react';
import styled from 'styled-components';
import PremierLeagueTable from '../components/football-data-pl';
import LiveDate from '../components/date';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; */
/* import { useState, useEffect } from 'react';

async function getPremierLeagueTable() {
	// API call code goes here...
} */

const Landing = styled.div`
	height: fit-content;
	width: 50%;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

function sectionOne() {
	/* 	const [table, setTable] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const premierLeagueTable = await getPremierLeagueTable();
			setTable(premierLeagueTable);
		}
		fetchData();
	}, []); */

	return (
		<Landing id='section_one'>
			<div className='landing_container'>
				<h1 className='landing_title'>Premier League Table</h1>
				<LiveDate />

				<PremierLeagueTable />
			</div>

			{/* <div className='icon_container'>
				<FontAwesomeIcon icon={faArrowDown} />
			</div> */}
		</Landing>
	);
}

export default sectionOne;
