 /* eslint-disable react/prop-types */

export function LivesLeft(props) {
 const {lives} = props;
    return (
        <>
            <span>Lives left: {lives}</span>
        </>
    )
}