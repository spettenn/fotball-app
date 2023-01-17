import React from 'react';
import styled from 'styled-components';
import PremierLeagueTable from '../components/football-data-pl';
import LiveDate from '../components/date';

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
	return (
		<Landing id='section_one'>
			<div className='landing_container'>
				<h1 className='landing_title'>Premier League Table</h1>
				<LiveDate />

				<PremierLeagueTable />
			</div>
		</Landing>
	);
}

export default sectionOne;
