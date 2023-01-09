/* import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_TOKEN = 'd40a0e9bdbee4dcf9b6a83407c1f0580';

async function getLaLigaTable() {
	try {
		const response = await axios.get(
			'https://api.football-data.org/v2/competitions/PD/standings',
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

function LaLigaLeagueTable() {
	const [table, setTable] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const LaLigaLeagueTable = await getLaLigaTable();
			setTable(LaLigaLeagueTable);
			console.log(LaLigaLeagueTable);
		}
		fetchData();
	}, []);

	return table.map((team) => (
		<>
			<tr>
				<img
					height={50}
					width={50}
					src={team.team.crestUrl}
					alt={`${team.team.name} logo`}
				/>
				<td key={team.team.id}>{team.team.name}</td>
				<td>{team.points}</td>
			</tr>
		</>
	));
}

export default LaLigaLeagueTable;
 */
/* import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_TOKEN = 'd40a0e9bdbee4dcf9b6a83407c1f0580';

async function getLaLigaTable() {
	try {
		const response = await axios.get(
			'https://api.football-data.org/v2/competitions/PD/standings',
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

function LaLigaTableCall() {
	const [table, setTable] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const laLigaTable = await getLaLigaTable();
			setTable(laLigaTable);
		}
		fetchData();
	}, []);

	const toggleDropdown = (team) => {
		setDropdownOpen(!dropdownOpen);
		setSelectedTeam(team);
	};

	return (
		<ul className='laLiga_container'>
			{table.map((team) => (
				<li key={team.team.id}>
					<button className='dropdown_btn' onClick={() => toggleDropdown(team)}>
						<img
							height={50}
							width={50}
							src={team.team.crestUrl}
							alt={`${team.team.name} logo`}
						/>
						{team.team.name} <div></div> {team.points}
					</button>
					{dropdownOpen && selectedTeam === team && (
						<ul className='laLiga_dropdown_container'>
							<li className='list_item_dropdown'>Position: {team.position}</li>
							<li className='list_item_dropdown'>
								Played Games: {team.playedGames}
							</li>
							<li className='list_item_dropdown'>Wins: {team.won}</li>
							<li className='list_item_dropdown'>Draws: {team.draw}</li>
							<li className='list_item_dropdown'>Losses: {team.lost}</li>
							<li className='list_item_dropdown'>Goals For: {team.goalsFor}</li>
							<li className='list_item_dropdown'>
								Goals Against: {team.goalsAgainst}
							</li>
							<li className='list_item_dropdown'>
								Goal Difference: {team.goalDifference}
							</li>
						</ul>
					)}
				</li>
			))}
		</ul>
	);
}
export default LaLigaTableCall; */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_TOKEN = 'd40a0e9bdbee4dcf9b6a83407c1f0580';

async function getLaLigaTable() {
	try {
		const response = await axios.get(
			'https://api.football-data.org/v2/competitions/PD/standings',
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

function LaLigaTableCall() {
	const [table, setTable] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [otherTeams, setOtherTeams] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const PLTable = await getLaLigaTable();
			setTable(showMore ? PLTable : PLTable.slice(0, 8));
			setOtherTeams(PLTable.slice(8));
		}
		fetchData();
	}, [showMore]);

	const toggleDropdown = (team) => {
		setDropdownOpen(!dropdownOpen);
		setSelectedTeam(team);
	};

	/* 	const imageUrl = (team) => {
		if (team.team.crestUrl === null) {
			return 'https://i.ibb.co/7bQQYkX/blank.png';
		} else {
			return team.team.crestUrl;
		}
	}; */

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
export default LaLigaTableCall;
