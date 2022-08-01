import React  from "react";
import * as estilo from "./estilo"


const Header = () => {
return(
<estilo.Container>
<estilo.Header>

<estilo.Titulo>Galeria de Clientes</estilo.Titulo>
<estilo.Descrição>Veja os clientes que mais se destacaram no mes de julho</estilo.Descrição>

</estilo.Header>
</estilo.Container>
);
};

export default Header;