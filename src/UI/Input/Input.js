import './Input.scss'

export const Input = ({children, ...props}) => {
    const {
        type = 'text',
        value = '',
        placeholder = '',
        ...etc
    } = props

    return(
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            {...etc}
        />
    )
}