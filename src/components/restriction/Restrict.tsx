
type RestrictPositive =RestrictValue & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type RestrictNegative =RestrictValue & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type RestrictZero =RestrictValue & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RestrictValue = {
    value : number
}

type RestrictProps = RestrictPositive | RestrictNegative | RestrictZero

export const Restrict = ({value, isPositive, isNegative, isZero}: RestrictProps) => {
  return (
    <div>
        <h3>Restricted App </h3>
        <div>
           {value && isPositive ? "positive" : isNegative ? "negative" : isZero ? "zero" : "no value"  }
        </div>
    </div>
  )
}
