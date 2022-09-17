import './Button.scss'

export const Button = ({children, ...props}) => {
    return(
        <button
            {...props}
        >
            {children || 'Click me!'}
        </button>
    )
}