import './../../assets/styles/Button.css'
import './../../assets/styles/TabButton.css'

function TabButton(props) {
      const className = "tab-btn" + (props.active ? " active": "");

function handleClick(e) {

      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      e.currentTarget.classList.add('active');
      const index = Array.from(document.querySelectorAll('.tab-btn')).indexOf(e.currentTarget);
      document.querySelectorAll('.tab-content')[index].classList.add('active');

      if(props.clicked) {
            props.clicked(props.text);
      }
}
      return (
            <button className={className} onClick={(e)=>handleClick(e)}>{props.text}</button>
      );
}

export default TabButton