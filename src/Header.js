export default function Header(props) {
    return(
        <div id="cabecera">
            <img className="logo" src="https://robohash.org/Sheldon.png?set=set4" alt="el logo de la página"/> 
            <h3 className="mensaje">{props.texto}</h3>           
        </div>
    );
}