import React from 'react'


const CarritoBoton = ({ carritoUser }) => {
    // const [carritoCount, setCarritoCount] = useState(carritoUser.length)

    // useEffect(() => {
    //     console.log(carritoCount)
    // }, [carritoUser])

    return (
        <button type="button" className="btn btn-primary">
            <i
                className="fa fa-shopping-cart fa-2x"
                aria-hidden="true"
            ></i>
            <span className="badge bg-secondary ms-2">{carritoUser ? carritoUser.length : '0'}</span>
        </button>
    )
}

export default CarritoBoton
