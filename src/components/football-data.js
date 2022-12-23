import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_TOKEN = 'd40a0e9bdbee4dcf9b6a83407c1f0580';

async function getPremierLeagueTable() {
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

	useEffect(() => {
		async function fetchData() {
			const premierLeagueTable = await getPremierLeagueTable();
			setTable(premierLeagueTable);
		}
		fetchData();
	}, []);

	return table.map((team) => (
		<>
			<tr>
				<img
					height={100}
					width={100}
					src={team.team.crestUrl}
					alt={`${team.team.name} logo`}
				/>
				<td key={team.team.id}>{team.team.name}</td>
				<td>{team.points}</td>
			</tr>
		</>
	));
}
{
	/* <ul>
			{table.map((team) => (
				<li key={team.team.id}>
					{team.team.name} - {team.points} points
				</li>
			))}
		</ul> */
}

export default PremierLeagueTable;
