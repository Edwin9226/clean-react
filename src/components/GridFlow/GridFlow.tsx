import React from 'react';
import './GridFlow.css'
//import styled from 'styled-components';

export type GridFlowProps = {


};

const GridFlow: React.FC<GridFlowProps> = () => {
	return (<>
		<div className="container" >
			<div className="small">1</div>
			<div className="large">2</div>
			<div className="large">3</div>
			<div className="large">4</div>
			<div className="large">5</div>
			<div className="small">6</div>
			<div className="small">7</div>
			<div className="small">8</div>
			<div className="small">9</div>
			<div className="small">10</div>
			<div className="small">11</div>
			<div className="small">12</div>
			<div className="small">13</div>
		</div >
	</>);
};

//export const GridFlowStyle = styled.div``;

export default GridFlow;
