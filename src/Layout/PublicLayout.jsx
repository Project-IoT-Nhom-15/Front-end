import './Layout.css';
import MainHeader from './MainHeader';
// import Footer from './Footer';

function PublicLayout(props) {
  return (
    <div className='public-layout'>
      <MainHeader />
      <div className='content'>
        {props.children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default PublicLayout;