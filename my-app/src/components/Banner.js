
const Banner = () => {
    const mystyle = {
        resizeMode: 'stretch',
        width:'100%',
        height:'200px',
        padding: "10px",
      };
    return( 
        <div className='banner' >
         <img src={require ('./images/download.jpg')} alt='' style={mystyle}/>
         </div>
    )

}

export default Banner;