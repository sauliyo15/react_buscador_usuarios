export default function Formulario(props) {
    return (
        <div>
            <input type='text' id='query' value={props.contenido} onChange={e=>props.setContenido(e.target.value)} placeholder='Texto a buscar'/>
            <button id='botonSearch' onClick={()=>props.callServer()}>Buscar</button>
        </div>
    );
}