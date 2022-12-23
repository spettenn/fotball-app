import React from 'react';
import styled from 'styled-components';
import LaLigaLeagueTable from '../components/football-data-liga';
import LiveDate from '../components/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Landing = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 20px;
	padding-bottom: 20px;
`;

function SectionTwo() {
	return (
		<Landing id='section_two'>
			<div className='landing_container'>
				<h1 className='landing_title'>La Liga League Table</h1>
				<LiveDate />
				<tr className='table_head_container'>
					<th>Crest</th>
					<th>Team</th>
					<th>Points</th>
				</tr>
				<LaLigaLeagueTable />
			</div>
			<div className='icon_container'>
				<FontAwesomeIcon icon={faArrowDown} />
			</div>
		</Landing>
	);
}

export default SectionTwo;
