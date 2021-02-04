import { React, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import "../styles/style.css";
import ControleManutencao from '../view/ControleManutencao.jsx';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return <div className="divPainelView">
		{value === index && <Box p={3}>{children}</Box>}

	</div>;
}

function MenuVertical() {
	const [value, setValue] = useState(2);

	const [sequencia, setSequencia] = useState([0,1,2,3,4]);

	const [labels, setLabels] = useState([
		"Informações Gerais",
		"Controle de Acesso",
		"Controle de Manutenção",
		"Controle de Estoque",
		"Gestão de pessoas"
	])

	function handleSequencia(index) {
		setValue(index);
		switch(index) {
			case 0: setSequencia([3,4,0,1,2]); break;
			case 1: setSequencia([4,0,1,2,3]); break;
			case 2: setSequencia([0,1,2,3,4]); break;
			case 3: setSequencia([1,2,3,4,0]); break;
			case 4: setSequencia([2,3,4,0,1]); break;
		}
	}

	function getTabPanel(index) {
		switch(index) {
			case 2: return <ControleManutencao />; break;
			default: return labels[index]; break;
		}
	}

	function getSequence() {
		return(
			<Tabs
				className="verticalTabs"
				orientation="vertical"
				variant="scrollable"
				value={value}
				indicatorColor=""
				aria-label="Vertical tabs example"
			>
				{sequencia.map((atual, index) => {
					if(index === 2) {
						return (
							<>
								<div className="trianguloSuperior"></div>
								<Tab onClick={() => handleSequencia(atual)} className="tabMenu menuAtivo" label={labels[atual]}/>
								<div className="trianguloInferior"></div>
							</>
						)
					}
					return <Tab onClick={() => handleSequencia(atual)} className="tabMenu" label={labels[atual]}/>
				})}
			</Tabs>
		)
	}

	return (
		<div className="divMenuVertical">
			{getSequence()}
			<TabPanel value={value} index={sequencia[2]}>
				{getTabPanel(sequencia[2])}
			</TabPanel>
		</div>
	);
}

export default MenuVertical;
