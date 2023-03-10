import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_TOKEN = 'd40a0e9bdbee4dcf9b6a83407c1f0580';

async function getPLTable() {
	try {
		const response = await axios.get(
			'https://api.football-data.org/v2/competitions/PL/standings',
			{
				headers: {
					'X-Auth-Token': API_TOKEN,
				},
			}
		);
		return response.data.standings[0].table;
	} catch (error) {
		console.error(error);
	}
}

function PremierLeagueTable() {
	const [table, setTable] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [otherTeams, setOtherTeams] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const PLTable = await getPLTable();
			setTable(showMore ? PLTable : PLTable.slice(0, 8));
			setOtherTeams(PLTable.slice(8));
		}
		fetchData();
	}, [showMore]);

	const toggleDropdown = (team) => {
		setDropdownOpen(!dropdownOpen);
		setSelectedTeam(team);
	};

	return (
		<>
			<ul className='laLiga_container'>
				{table.map((team) => (
					<li key={team.team.id}>
						<button
							className='dropdown_btn'
							onClick={() => toggleDropdown(team)}>
							<h3>{team.team.name}</h3> <h3>{team.points}</h3>
						</button>
						{dropdownOpen && selectedTeam === team && (
							<ul className='laLiga_dropdown_container'>
								<img
									id='myImage'
									height={40}
									width={35}
									src={team.team.crestUrl}
									alt={`${team.team.name} logo`}
									style={{ borderRadius: '50%', margin: 'auto' }}
								/>
								<li className='list_item_dropdown'>
									Position: {team.position}
								</li>
								<li className='list_item_dropdown'>
									Played Games: {team.playedGames}
								</li>
								<li className='list_item_dropdown'>Wins: {team.won}</li>

								<li className='list_item_dropdown'>Draws: {team.draw}</li>
								<li className='list_item_dropdown'>Losses: {team.lost}</li>
								<li className='list_item_dropdown'>
									Goals For: {team.goalsFor}
								</li>
								<li className='list_item_dropdown'>
									Goals Against: {team.goalsAgainst}
								</li>
								<li className='list_item_dropdown'>
									Goal Difference: {team.goalDifference}
								</li>
							</ul>
						)}
						{/* {addEventListeners(team)} */}
					</li>
				))}
			</ul>
			{otherTeams.length > 0 && (
				<button
					className='show_more_btn'
					onClick={() => setShowMore(!showMore)}>
					{showMore ? 'Vis mindre' : 'Vis mer'}
				</button>
			)}
		</>
	);
}
export default PremierLeagueTable;
