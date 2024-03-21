import Age from "./Age";

function Welcome ({name = 'Giuseppe', age = 19}) {  // Non ho capito perchè deve cambiare il valore di age sia qui sia nel componente Age per cambiare effettivamente il valore dell'età
    return(
        <>
        <p>Welcome, <strong>{name}</strong>!</p>
        {age > 18 ? <span><Age /></span> : <span>Devi avere più di 18 Anni</span>}
        {age && <span><Age /></span>}
        {age > 18 && age < 65 ? <span><Age /></span> : <span>La tua età non soddisfa i requisiti richesti</span>}
        {age > 18 && age < 65 && name === 'John'? <span><Age /></span> : <span>il nome inserito non è quello richiesto</span>}
        </>
    )
}

export default Welcome