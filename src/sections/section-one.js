import React from 'react';
import styled from 'styled-components';
import PremierLeagueTable from '../components/football-data-pl';
import LiveDate from '../components/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Landing = styled.div`
	height: fit-content;
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: row;
`;

function sectionOne() {
	return (
		<Landing id='section_one'>
			<div className='landing_container'>
				<h1 className='landing_title'>Premier League Table</h1>
				<LiveDate />
				<tr className='table_head_container'>
					<th>Crest</th>
					<th>Team</th>
					<th>Points</th>
				</tr>
				<PremierLeagueTable />
			</div>
			<div className='icon_container'>
				<FontAwesomeIcon icon={faArrowDown} />
			</div>
		</Landing>
	);
}

export default sectionOne;
