import React from 'react';
import styled from 'styled-components';

const Landing = styled.div`
	background-color: #f2f2f2;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url('./assets/background_madrid.avif');
`;

function SectionTwo() {
	return <Landing>section-two</Landing>;
}

export default SectionTwo;
