const ItemStatus = ({Item,Itempacked}) => {
    return (
        <>
            <h1>this is item section {Item}</h1>
            <h1>this is item section {Itempacked}</h1>
        </>
    )
}

const Renderitem1 = () => {
    return(
        <div>
            <ItemStatus Item="Oneplus Nord CE 2 Lite 5G(Blue 512 GB ,6 GB RAM)" Itempacked={true}/>
        </div>
    )
}

export default Renderitem1