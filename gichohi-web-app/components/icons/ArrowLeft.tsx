export default function ArrowLeft({onClick}: {onClick?: ()=>void}){
    return (
        <svg onClick={onClick} className="cursor-pointer" width="70" height="73" viewBox="0 0 70 73" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="70" height="73" fill="url(#pattern0_23_53)"/>
            <defs>
                <pattern id="pattern0_23_53" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_23_53" transform="matrix(0.00814732 0 0 0.0078125 -0.0214286 0)"/>
                </pattern>
                <image id="image0_23_53" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>

    )
}