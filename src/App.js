import React from 'react'
import './images/lebron1.mp4'


const App = () => {
    return(
        <>
            
            <div className='container'>
                <h2>THE KING</h2>
                <div className='video'></div>
            </div>
            <div className='espn'></div>
            {/* <div className='crown'></div> */}
            <div className='text'>
                <p>BOW
                    <span style={{fontSize:'13pt', marginLeft:'6px'}}>TO</span>
                    </p>
                <p style={{color:'tomato'}}>ROYALTY</p>
            </div>
            <div className='text2'>
                <p style={{fontSize: '16pt'}}>KING OF<br></br>THE RINGS?</p>

                <p style={{fontSize: '12pt', lineHeight:'1',fontFamily:'Playfair Display, serif',marginTop:'-13px',marginLeft:'10px'}}>THE CHASE 
                    <br></br>FOR</p> <span style={{fontSize:'30pt', color:'tomato',top: '-35px',position:'relative',
    left: '47px'}}>6</span>
            </div>
        </>
    )
}


export default App


/* <video className='videoTag' autoPlay loop muted>
    <source src='lebron1.mp4' type='video/mp4' />
</video> */