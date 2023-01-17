import React from 'react';
import styled from 'styled-components';
import VideoEmbed from '../components/video.jsx';

const SectionThreeContainer = styled.section`
	height: 20rem;
	width: fit-content;
	background-color: #f5f5f5;
	margin: auto;
`;

function SectionThree() {
	return (
		<SectionThreeContainer>
			<VideoEmbed video='laliga' />
		</SectionThreeContainer>
	);
}

export default SectionThree;
