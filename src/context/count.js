import  { createContext } from 'react'

const Contex = createContext( {
    count: 0,
    setCount: () => {}
});

export default Contex