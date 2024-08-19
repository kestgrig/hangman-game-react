 /* eslint-disable react/prop-types */

export function LivesLeft(props) {
 const {lives} = props;
    return (
        <div>
            <span>Lives left: {lives}</span>
        </div>
    )
}