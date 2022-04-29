import './styles.css'
import Image from './laptop.png'
import Logo from './hp.svg'

export const App = () => {
    return <><h1>this is react</h1>
        <p>{process.env.NODE_ENV}</p>
        <img src={Image} />
        <img src={Logo} /></>
} 