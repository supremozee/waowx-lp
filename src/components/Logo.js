import logo from '../assets/logowaowx.webp'
export const Logo = ()=> {
    return (
        <div style={{
            display: "flex",
            margin: "0",
            justifyContent: 'center',
            Padding: "0",
            height: '170px',
            width: '100%'

            
        }}>
            <img src={logo} height={'150px'} width={'150px'}/>
        </div>
    )
}