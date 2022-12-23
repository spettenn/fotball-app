import React from 'react';
import styled from 'styled-components';
import PremierLeagueTable from '../components/football-data';
import LiveDate from '../components/date';

const Landing = styled.div`
	background-color: #f2f2f2;
	height: 100vh;
	width: 100%;
`;

function sectionOne() {
	return (
		<Landing>
			<div className='landing_container'>
				<h1 className='landing_title'>Premier League Table</h1>
				<LiveDate />
				<tr>
					<th>Team</th>
					<th>Points</th>
				</tr>
				<PremierLeagueTable />
			</div>
		</Landing>
	);
}

export default sectionOne;
