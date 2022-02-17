import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {

    return (
    <button  onClick={onClick} style={{backgroundColor: color}} className='btn'>{text} </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func
}



export default Button



/*
import PropTypes from 'prop-types'

const Button = (props) => {

    return (
        <div>
            <button style={{backgroundColor: props.color}} className='btn'>{props.text}</button>
            
        </div>
    )
}


export default Button
*/
