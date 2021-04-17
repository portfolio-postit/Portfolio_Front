import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: 100%;
	background: #ff9d9d;
	align-items: center;
	justify-content: center;

	overflow: auto;
`;

export const ErrorWrap = styled.div`
	position: relative;
	display: flex;
	width: 540px;
	height: 340px;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
`;

export const TopText = styled.p`
	position: relative;
	color: #ffffff;
	font-size: 50px;
	font-weight: bold;

	&::before,
	&::after {
		top: 50%;
		position: absolute;
		display: flex;
		content: "  ";
		width: 20px;
		height: 20px;
		border-radius: 20px;
		background: #ffffff;
	}

	&::before {
		left: -100px;
	}

	&::after {
		right: -100px;
	}
`;

export const MainText = styled.p`
	color: #ffffff;
	font-size: 200px;
	font-weight: bold;
`;

export const BorderText = styled.p`
	display: flex;
	width: 500px;
	height: 100px;
	color: #ffffff;
	font-size: 50px;
	font-weight: bold;
	border-top: 5px solid white;
	border-bottom: 5px solid white;
	padding: 20px 0;
	align-items: center;
	justify-content: center;
`;

export const SubText = styled.p`
	margin: 30px 0 0 0;
	color: #ffffff;
	font-size: 30px;
	text-align: center;
`;

export const RedirectBtn = styled.a`
	position: absolute;
	display: flex;
	width: 162px;
	height: 48px;
	color: #ffffff;
	font-size: 24px;
	font-weight: bold;
	border: 4px solid #ffffff;
	border-radius: 34px;
	background: #ff9d9d;
	align-items: center;
	justify-content: center;

	right: 50px;
	bottom: 20px;

	&:hover {
		color: #ff9d9d;
		background: #ffffff;
	}
	transition: all 0.3s ease-in-out;
`;
