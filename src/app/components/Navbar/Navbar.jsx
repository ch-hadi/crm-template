import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  const handleProfile=()=>{
    alert('profile')
  }
  return (
    <Navbar>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='profile'>
           Hi,<b style={{margin:'0px 5px', fontSize:15 , fontWeight:'bolder'}}>Hadi</b><p className='profile-ico' onClick={handleProfile}>H</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;